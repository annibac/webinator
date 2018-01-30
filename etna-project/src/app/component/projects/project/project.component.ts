import {Component, OnInit, Input} from '@angular/core';
import {ProjectsService} from '../../../services/projects/projects.service';
import {ScoreService} from '../../../services/score/score.service';
import {Observable, Subscription} from 'rxjs/Rx';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalScoreComponent} from './modal/modal-score/modal-score.component';
import {ModalErrorComponent} from './modal/modal-error/modal-error.component';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: any;
  projectsService: ProjectsService;
  scoreService: ScoreService;
  timer: Subscription;
  @Input('index') index: number;
  currentTime: number;
  maxTime: number;
  isStarted: boolean;

  constructor(projectsService: ProjectsService, scoreServices: ScoreService, private modalService: NgbModal, private userService: UserService) {
    this.projectsService = projectsService;
    this.scoreService = scoreServices;
    this.currentTime = 0;
    this.isStarted = false;
  }

  ngOnInit() {
    this.project = this.projectsService.getProject(this.index);
  }

  modalsAction() {
    this.userService.nbProjectsAtSameTime--;
    const modalRef = this.modalService.open(ModalScoreComponent);
    const random = Math.floor(Math.random() * (100)) + 1;

    if (random - this.userService.charism <= this.project.difficulty) {
      this.scoreService.add(this.project.score);
      modalRef.componentInstance.title = 'Félicitation !';
      modalRef.componentInstance.content = 'Tu as réussi à valider ton projet ! Ton score a augmenté de ' + this.project.score;
    }
    else {
      this.scoreService.substract(this.project.score, false);
      modalRef.componentInstance.title = 'Dommage !';
      modalRef.componentInstance.content = 'Tu n\'as pas réussi à valider ton projet ... Ton score est réduit de ' + this.project.score + '.';
    }
    this.timer.unsubscribe();
  }

  beginProject(event) {
    this.maxTime = this.project.difficulty / this.userService.linePerSecond;
    if (this.userService.nbProjectsAtSameTime >= this.userService.maxProjectsAtSameTime) {
      this.modalService.open(ModalErrorComponent);
      return -1;
    }
    this.isStarted = true;
    this.userService.nbProjectsAtSameTime++;
    this.timer = Observable.interval(1000).subscribe(x => {
      const tmpMaxTime = this.project.difficulty / this.userService.linePerSecond;
      console.log(tmpMaxTime, this.currentTime);
      if (this.maxTime - this.currentTime > tmpMaxTime) {
        this.maxTime = tmpMaxTime;
      }
      if (this.currentTime < this.maxTime) {
        this.currentTime++;
      }
      else {
        this.modalsAction();
        this.projectsService.delProject(this.index);
      }
    });
  }

  test() {
    this.currentTime++;
  }
}

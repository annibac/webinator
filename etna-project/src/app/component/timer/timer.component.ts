import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score/score.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  score: ScoreService;
  interval: any;

  constructor(public scoreService: ScoreService, private router: Router) {
    this.score = scoreService;

    this.interval = setInterval(() => {
      if (this.score.winningCondition() != 0) {
          clearInterval(this.interval);
          this.router.navigate(['/end']);
      }
      else {
        this.score.update()
      }
    }, 1000);
  }

  ngOnInit() {
  }

}

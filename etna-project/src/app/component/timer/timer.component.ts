import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score/score.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  score: ScoreService;

  constructor(public scoreService: ScoreService) {
    this.score = scoreService;

    setInterval(() => {
      this.score.update();
    }, 1000);
  }

  ngOnInit() {
  }

}

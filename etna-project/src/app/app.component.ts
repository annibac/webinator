import { Component } from '@angular/core';
import { ScoreService } from './services/score/score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  score: ScoreService;

  constructor (score: ScoreService) {
    this.score = score;
  }
}

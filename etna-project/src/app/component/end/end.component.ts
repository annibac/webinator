import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score/score.service';
import { SkillsService } from '../../services/skills/skills.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  constructor(private scoreService: ScoreService, private skillsService: SkillsService) { }

  ngOnInit() {
  }

}

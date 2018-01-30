import { SkillsService } from '../../services/skills/skills.service';
import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private skillsService: SkillsService, private userService: UserService) {}

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  stage: number;
  constructor() {
    this.stage = 0;
  }

  ngOnInit() {
  }

  sexChoosed(changeStage: boolean) {
    if (changeStage === true) {
      this.stage++;
    }
  }
}

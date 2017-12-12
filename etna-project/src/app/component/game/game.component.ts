import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
   }

  ngOnInit() {
  }

}

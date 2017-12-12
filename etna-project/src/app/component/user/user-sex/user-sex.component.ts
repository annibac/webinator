import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-sex',
  templateUrl: './user-sex.component.html',
  styleUrls: ['./user-sex.component.css']
})
export class UserSexComponent implements OnInit {

  userService: UserService;
  @Output() sexChoosed = new EventEmitter<boolean>();

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
  }

  chooseSex(gender: string) {
    console.log(this.userService.sex);
    this.userService.sex = gender;
    this.sexChoosed.emit(true);
    console.log(this.userService.sex);
  }
}

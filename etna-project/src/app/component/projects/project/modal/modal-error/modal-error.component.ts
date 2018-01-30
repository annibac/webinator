import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user/user.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit {

  userService: UserService;

  constructor(userService: UserService, public activeModal: NgbActiveModal) {
    this.userService = userService;
  }

  ngOnInit() {
  }

}

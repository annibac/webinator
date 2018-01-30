import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-score',
  templateUrl: './modal-score.component.html',
  styleUrls: ['./modal-score.component.css']
})
export class ModalScoreComponent implements OnInit {

  @Input() title;
  @Input() content;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

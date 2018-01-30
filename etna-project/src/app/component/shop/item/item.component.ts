import {ScoreService} from '../../../services/score/score.service';
import {Component, OnInit, Input} from '@angular/core';
import {ShopService} from '../../../services/shop/shop.service';
import {NotificationsService} from 'angular2-notifications';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: any;
  @Input('index') index: number;

  constructor(
    private notificationsService: NotificationsService,
    private shopService: ShopService,
    private scoreService: ScoreService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.item = this.shopService.getItem(this.index);
  }

  buyItem(event) {
    const buying = this.scoreService.substract(this.item.cost, true);

    if (buying === -1) {
      this.notificationsService.error(
        'Désolé',
        '<br>Vous ne pouvez pas acheter ' + this.item.name + ' :(',
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          maxLength: 10
        },
      );
    }
    else {
      this.shopService.shop(this.item.target, this.item.value);
      this.notificationsService.success(
        'Bien joué !',
        '<br>Vous venez d\'acheter ' + this.item.name + ' !',
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          maxLength: 10
        },
      );
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {NotificationsService} from 'angular2-notifications';
import {ShopService} from '../../services/shop/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: any;

  constructor(private notificationsService: NotificationsService, shopService: ShopService) {
    this.items = shopService.items;
  }

  ngOnInit() {
  }

}

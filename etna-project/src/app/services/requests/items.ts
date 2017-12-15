/**
 * Created by celine_nnbl on 15/12/2017.
 */
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
import {on} from "cluster";

@Injectable()
export class ItemsService {

  object_return: any;

  private apiUrl = "http://localhost:3000/";  // URL to web API

  constructor (private http: HttpClient) {}

  get_all_items() {
    return this.http.get(this.apiUrl + 'items');
  }

  create_item(name: string, price:number, bonus: any)
  {
    return this.http.post(this.apiUrl + 'items', {name: name, price:price, bonus: bonus});
  }

  get_item(itemId : number){
    return this.http.get(this.apiUrl + 'items/' + itemId);
  }

  delete_item(itemId : number){
    return this.http.delete(this.apiUrl + 'items/' + itemId);
  }
}

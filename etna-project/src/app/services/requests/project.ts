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
export class ProjectService {

  object_return: any;

  private apiUrl = "http://localhost:3000/";  // URL to web API

  constructor (private http: HttpClient) {}

  get_all_projects() {
    return this.http.get(this.apiUrl + 'projects');
  }

  create_project(name: string, level: number, difficulty: number, language: string, score:number)
  {
    return this.http.post(this.apiUrl + 'projects', {name: name, level: level, difficulty: difficulty, language: language, score:score});
  }

  get_project(projectId : number){
     return this.http.get(this.apiUrl + 'projects/' + projectId);
  }

  delete_project(projectId : number){
    return this.http.delete(this.apiUrl + 'projects/' + projectId);
  }
}

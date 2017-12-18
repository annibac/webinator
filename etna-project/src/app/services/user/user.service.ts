import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private _name: string;
  private _sex: string;
  private _nbProjectsAtSameTime: number;

  constructor() {
    this._nbProjectsAtSameTime = 3;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set sex(sex: string) {
    this._sex = sex;
  }

  get sex(): string {
    return this._sex;
  }

  set nbProjectsAtSameTime(nbProjectsAtSameTime: number) {
    this._nbProjectsAtSameTime = nbProjectsAtSameTime;
  }

  get nbProjectsAtSameTime(): number {
    return this._nbProjectsAtSameTime;
  }
}

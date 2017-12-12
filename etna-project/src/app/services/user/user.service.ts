import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private _name: string;
  private _sex: string;

  constructor() { }

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
}

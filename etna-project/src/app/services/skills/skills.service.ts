import { Injectable } from '@angular/core';

@Injectable()
export class SkillsService {

  private _value: number;

  constructor() {
    this._value = 0;
  }

  set value(new_value: number) {
    this._value = new_value;
  }

  get value(): number {
    return this._value;
  }

  // Adding value to skills value
  add(adding_value: number) {
    this._value += adding_value;
  }
}

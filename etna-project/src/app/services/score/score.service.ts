import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {
  private _value: number;
  private _addingValue: number;
  private _winningValue: number;

  constructor() {
    this._value = 10;
    this._addingValue = 1;
    this._winningValue = 20;
  }

  set value(new_value: number) {
    this._value = new_value;
  }

  get value(): number {
    return this._value;
  }

  set addingValue(addingValue: number) {
    this._addingValue = addingValue;
  }

  get addingValue(): number {
    return this._addingValue;
  }

  winningCondition() {
    if (this._value >= this._winningValue)
      return 1;
    else if (this._value <= 0)
      return -1;
    console.log(this._value);
    return 0;
  }

  // Update score by 1 (used with score timer)
  update() {
    this._value += this._addingValue;
  }

  // Adding value to score value
  add(adding_value: number) {
    this._value += adding_value;
  }

  // Subtracting score value with another value
  // and check if it's for buying in shop or losing point at project end
  substract(substrating_value: number, buying: boolean) {
    if (this._value - substrating_value < 0) {
      if (buying === true) {
        return -1;
      }
      this._value = 0;
      return 1;
    }
    else {
      this._value -= substrating_value;
      return 1;
    }
  }
}

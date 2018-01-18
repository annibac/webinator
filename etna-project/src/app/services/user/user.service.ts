import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private _name: string;
  private _sex: string;
  private _maxProjectsAtSameTime: number;
  private _nbProjectsAtSameTime: number;
  private _linePerSecond: number;
  private _charism: number;

  constructor() {
    this._nbProjectsAtSameTime = 0;
    this._maxProjectsAtSameTime = 1;
    this._linePerSecond = 1;
    this._charism = 0;
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

  set maxProjectsAtSameTime(maxProjectsAtSameTime: number) {
    this._maxProjectsAtSameTime = maxProjectsAtSameTime;
  }

  get maxProjectsAtSameTime() {
    return this._maxProjectsAtSameTime;
  }

  set linePerSecond(linePerSecond: number) {
    this._linePerSecond = linePerSecond;
  }

  get linePerSecond() {
    return this._linePerSecond;
  }

  set charism(charism: number) {
    this._charism = charism;
  }

  get charism() {
    return this._charism;
  }
}

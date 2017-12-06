import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {
  value: number;

  constructor() {
    this.value = 0;
  }

  update() {
    return this.value++;
  }
}

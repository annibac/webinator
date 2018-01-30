import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';
import {SkillsService} from '../skills/skills.service';

@Injectable()
export class ShopService {

  private _items = [{name: 'Robin', desc: 'Avec Robin à vos côtés, vos skills en PHP augmentent de 5.', cost: 10, target: 'skills', value: 5},
  {name: 'Keyboard', desc: 'Vous développez 1 ligne de plus par sec !', cost: 10, target: 'speed', value: 1},
  {name: 'Ordinateur', desc: 'Vous pouvez développer 1 projet de plus en même temps !', cost: 10, target: 'project', value: 1},
  {name: 'MICROPHONE', desc: 'Votre compétence \'charisme\' augmente de 10.', cost: 10, target: 'charism', value: 10}];

  constructor(private skillsService: SkillsService, private userService: UserService) { }

  get items(): any {
    return this._items;
  }

  set items(items: any) {
    this._items = items;
  }

  // Remove 1 item from items array
  delItem(index: number) {
    if (index !== -1) {
        this._items.splice(index, 1);
    }
  }

  getItem(index: number) {
    return this._items[index];
  }

  shop(shopType: string, value: number) {
    if (shopType === 'skills') {
      this.skillsService.add(value);
    }
    else if (shopType === 'speed') {
      this.userService.linePerSecond++;
    }
    else if (shopType === 'project') {
      this.userService.maxProjectsAtSameTime++;
    }
    else if (shopType === 'charism') {
      this.userService.charism += value;
    }
  }
}

// Buy : dev speed, nb project at same time, skills, nb
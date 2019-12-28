import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Stuff } from './stuff.model';

@Injectable()
export class StuffService {
  stuffChanged = new Subject<Stuff[]>();

  /*private stuff: Stuff[] = [
    new Stuff('Hoodie en laine', 'Vêtement', 'Veste', '6 months', 'Winter'),
    new Stuff('Jupe', 'Vêtement', 'Pantalon', '9 months', 'Summer')
  ];*/

  private stuff: Stuff[] = [];

  setStuff(stuff: Stuff[]) {
    this.stuff = stuff;
    this.stuffChanged.next(this.stuff.slice());
  }

  getStuff() {
    return this.stuff.slice();
  }

  getStuffEl(index: number) {
    return this.stuff[index];
  }

  addStuff(stuff: Stuff) {
    this.stuff.push(stuff);
    this.stuffChanged.next(this.stuff.slice());
  }

  updateStuff(index: number, newStuff: Stuff) {
    this.stuff[index] = newStuff;
    this.stuffChanged.next(this.stuff.slice());
  }

  deleteStuff(index: number) {
    this.stuff.splice(index, 1);
    this.stuffChanged.next(this.stuff.slice());
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Stuff } from '../stuff/stuff.model';
import { StuffService } from '../stuff/stuff.service';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private stuffService: StuffService) {}

  storeStuff() {
    const stuff = this.stuffService.getStuff();
    this.http
      .put(
        'https://amelia-3eb98.firebaseio.com/stuff.json',
        stuff,
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchStuff() {
    return this.http
      .get<Stuff[]>('https://amelia-3eb98.firebaseio.com/stuff.json')
/*      .pipe(
        map(stuffs => {
          return stuffs.map(stuff => {
            return {
              ...stuff,
              stuffs: stuff.pictures ? stuff.pictures : []
            };
          });
        }),*/
      .pipe(
        tap(stuff => {
          this.stuffService.setStuff(stuff);
        })
      );
  }
}

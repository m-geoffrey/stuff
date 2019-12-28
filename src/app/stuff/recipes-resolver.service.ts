import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Stuff } from './stuff.model';

import { DataStorageService } from '../shared/data-storage.service';
import { StuffService } from './stuff.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Stuff[]> {
  constructor(private dataStorageService: DataStorageService,
              private stuffService: StuffService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const stuff = this.stuffService.getStuff();

    if (stuff.length === 0) {
      return this.dataStorageService.fetchStuff();
    } else {
      return stuff;
    }
  }
}

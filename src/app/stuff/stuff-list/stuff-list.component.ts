import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Stuff } from '../stuff.model';
import { StuffService } from '../stuff.service';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.css']
})
export class StuffListComponent implements OnInit {
  stuff: Stuff[];

  constructor(private stuffService: StuffService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.stuffService.stuffChanged
      .subscribe(
        (stuff: Stuff[]) => {
          this.stuff = stuff;
        }
      );
    this.stuff = this.stuffService.getStuff();
  }

  onAddStuff() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

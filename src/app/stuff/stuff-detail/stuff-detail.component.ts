import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Stuff } from '../stuff.model';
import { StuffService } from '../stuff.service';

@Component({
  selector: 'app-stuff-detail',
  templateUrl: './stuff-detail.component.html',
  styleUrls: ['./stuff-detail.component.css']
})
export class StuffDetailComponent implements OnInit {
  stuff: Stuff;
  id: number;

  constructor(private stuffService: StuffService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.stuff = this.stuffService.getStuffEl(this.id);
        }
      );
  }

  onEditStuff() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteStuff() {
    this.stuffService.deleteStuff(this.id);
    this.router.navigate(['/stuff']);
  }
}

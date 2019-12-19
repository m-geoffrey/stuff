import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StuffService } from '../stuff.service';
import { Stuff } from '../stuff.model';

@Component({
  selector: 'app-stuff-edit',
  templateUrl: './stuff-edit.component.html',
  styleUrls: ['./stuff-edit.component.css']
})
export class StuffEditComponent implements OnInit {
  id: number;
  editMode = false;
  stuffForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private stuffService: StuffService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let stuffName = '';
    let stuffCategory = '';
    let stuffType = '';
    let stuffSize = '';
    let stuffSeason = '';

    if (this.editMode) {
      const stuff = this.stuffService.getStuffEl(this.id);
      stuffName = stuff.name;
      stuffCategory = stuff.category;
      stuffType = stuff.type;
      stuffSize = stuff.size;
      stuffSeason = stuff.season;
    }

    this.stuffForm = new FormGroup({
      'name': new FormControl(stuffName, Validators.required),
      'category': new FormControl(stuffCategory, Validators.required),
      'type': new FormControl(stuffType, Validators.required),
      'size': new FormControl(stuffSize, Validators.required),
      'season': new FormControl(stuffSeason, Validators.required),
    });
  }

  onSubmit() {

    if (this.editMode) {
      this.stuffService.updateStuff(this.id, this.stuffForm.value);
    } else {
      this.stuffService.addStuff(this.stuffForm.value);
    }
    this.onCancel(); // for redirect
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

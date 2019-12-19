import { Component, Input, OnInit } from '@angular/core';

import { Stuff } from '../../stuff.model';

@Component({
  selector: 'app-stuff-item',
  templateUrl: './stuff-item.component.html',
  styleUrls: ['./stuff-item.component.css']
})
export class StuffItemComponent implements OnInit {
  @Input() stuff: Stuff;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}

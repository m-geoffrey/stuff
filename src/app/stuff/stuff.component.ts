import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css'],
})
export class StuffComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.dataStorageService.fetchStuff().subscribe();
  }

}

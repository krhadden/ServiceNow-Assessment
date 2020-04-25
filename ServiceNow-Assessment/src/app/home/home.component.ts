import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllIncidents().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

}

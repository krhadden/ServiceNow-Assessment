import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public states: string[] = ['Open', 'In Progress', 'Resolved', 'Closed'];
  public data: any;
  public statesData: any;

  public displayedColumns: string[] = ['Numbers', 'Priority', 'ShortDescription', 'Category', 'State', 'Created'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllIncidents().subscribe(data => {
      this.data = data;
      this.setStatesData();
    });
  }

  public setStatesData(): void {
    this.statesData = {};
    this.states.forEach(state => {
      const incidentsByState = _.filter(this.data, ['state', state]);
      this.statesData[state] = {
        count: incidentsByState.length,
        data: incidentsByState
      };
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as _ from 'lodash';

import { NewIncidentDialogComponent } from '../new-incident-dialog/new-incident-dialog.component';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loading = true;
  public states: string[] = ['Open', 'In Progress', 'Resolved', 'Closed'];
  public data: any;
  public statesData: any;
  public state: any;
  public showState = false;

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getAllIncidents().subscribe(data => {
      // remove duplicate entries for the view
      this.data = _.uniqWith(data, _.isEqual);
      this.setStatesData();
      this.loading = false;
    });
  }

  public setStatesData(): void {
    this.statesData = {};
    this.states.forEach(state => {
      const incidentsByState = _.filter(this.data, ['state', state]);
      this.statesData[state] = {
        label: state,
        count: incidentsByState.length,
        data: incidentsByState
      };
    });
  }

  public selectState(state: string) {
    this.state = this.statesData[state];
    this.showState = true;
  }

  public openNewIncident(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(NewIncidentDialogComponent, {
      data: {
        number: '',
        short_description: '',
        description: '',
        state: '',
        priority: '',
        sys_created_on: '',
        active: ''
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log(`${data}`);
    });
  }

}

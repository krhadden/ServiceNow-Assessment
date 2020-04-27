import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-new-incident-dialog',
  templateUrl: './new-incident-dialog.component.html',
  styleUrls: ['./new-incident-dialog.component.scss']
})
export class NewIncidentDialogComponent implements OnInit {
  public formGroup: FormGroup;
  public number: number;
  public state: string;
  public shortDescription: string;
  public description: string;
  public priority: string;
  public active: string;
  public category: string;
  public states: string[] = ['Open', 'In Progress', 'Resolved', 'Closed'];
  public priorityOptions: string[] = ['1 - Critical', '2 - High', '3 - Moderate', '4 - Low', '5 - Planning'];
  public addSuccessMessage = 'Successfully created incident ';

  constructor(
    private snackbar: MatSnackBar,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewIncidentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.number = data.number;
      this.state = data.state;
      this.shortDescription = data.short_description;
      this.description = data.description;
      this.priority = data.priority;
      this.active = data.active;
      this.category = data.category;
    }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      number: [this.number, Validators.required],
      state: [this.number, Validators.required],
      short_description: [this.shortDescription, Validators.required],
      description: [this.description, null],
      priority: [this.priority, null],
      active: [this.active, null]
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public save(): void {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    this.dataService.createNewIncident(this.formGroup.getRawValue()).subscribe(result => {
      this.snackbar.open(this.addSuccessMessage + result.data.number, null, config);
      this.dialogRef.close(result);
    });
  }

}

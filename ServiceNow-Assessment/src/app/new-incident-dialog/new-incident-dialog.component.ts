import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-new-incident-dialog',
  templateUrl: './new-incident-dialog.component.html',
  styleUrls: ['./new-incident-dialog.component.scss']
})
export class NewIncidentDialogComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewIncidentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      number: [null, Validators.required],
      state: [null, Validators.required],
      short_description: [null, Validators.required],
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public save(): void {
    this.dataService.createNewIncident(this.formGroup.getRawValue()).subscribe(result => {
      console.log(result);
      this.close();
    });
  }

}

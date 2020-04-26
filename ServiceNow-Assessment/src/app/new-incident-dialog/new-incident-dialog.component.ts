import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-incident-dialog',
  templateUrl: './new-incident-dialog.component.html',
  styleUrls: ['./new-incident-dialog.component.scss']
})
export class NewIncidentDialogComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewIncidentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      short_description: [null, Validators.required],
      description: [null, Validators.required],
      priority: [null, Validators.required],
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public save(): void {

  }

}

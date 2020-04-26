import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentDialogComponent } from './new-incident-dialog.component';

describe('NewIncidentDialogComponent', () => {
  let component: NewIncidentDialogComponent;
  let fixture: ComponentFixture<NewIncidentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIncidentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

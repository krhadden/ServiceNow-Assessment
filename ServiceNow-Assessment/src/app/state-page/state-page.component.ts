import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-page',
  templateUrl: './state-page.component.html',
  styleUrls: ['./state-page.component.scss']
})
export class StatePageComponent implements OnInit {
  @Input() stateData: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any;

  public displayedColumns: string[] = ['Numbers', 'Priority', 'ShortDescription', 'Category', 'State', 'Created'];

  constructor() { }

  ngOnInit(): void {
  }

}

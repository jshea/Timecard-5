import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { WAM } from '../../models/wam';

@Component({
  selector:    'tc-wam',
  templateUrl: './wam.component.html',
  styleUrls:  ['./wam.component.css']
})
export class WamComponent implements OnInit, AfterViewInit {

  @Input() wam: WAM[];

  public displayedColumns = ['project', 'projectName', 'task', 'taskName', 'from', 'to'];
  public dataSource: MatTableDataSource<WAM>;

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<WAM>(this.wam);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();         // Remove whitespace
    filterValue = filterValue.toLowerCase();  // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

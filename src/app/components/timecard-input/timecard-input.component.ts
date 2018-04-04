import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { MatTableDataSource } from '@angular/material';

import { UserService } from '../../services/user.service';
import { Timecard } from '../../models/timecard';
import { WAM } from '../../models/wam';

@Component({
  selector:    'tc-timecard-input',
  templateUrl: './timecard-input.component.html',
  styleUrls:  ['./timecard-input.component.css']
})
export class TimecardInputComponent implements OnInit {
  @Input() timecard: Timecard;
  @Input() wams: WAM[];

  public dataSource: MatTableDataSource<Timecard>;

  constructor() { }

  ngOnInit() {  }

}

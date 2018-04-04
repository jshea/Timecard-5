import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Timecard } from '../models/timecard';
import { Allocation } from '../models/allocation';
import { Leave } from '../models/leave';
import { WAM } from '../models/wam';
import { Accrual } from '../models/accrual';

@Injectable()
export class UserService {

  private timecards: Timecard[] = [];
  private wams: WAM[] = [];


  constructor(private http: HttpClient) {
    this.timecards = [
      new Timecard(
        'fflintstone',
        'Fred Flintstone',
        '2018-04-01',
        'Incomplete',
        new Accrual(260.3, 456.7, 10),
        [new Allocation('123456', 'A fun task', 10)],
        [
          new Leave('Vacation', 285.6),
          new Leave('Sick', 593),
          new Leave('Personal', 8)
        ],
      ),
      new Timecard(
        'fflintstone',
        'Fred Flintstone',
        '2018-04-08',
        'Incomplete',
        new Accrual(260.3, 456.7, 10),
        [],
        []
      )
    ];

    this.wams =         [
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.01', 'Design',   '2018-01-15', '2019-06-24'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.02', 'Build',    '2018-01-20', '2019-06-24'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.03', 'Test',     '2018-02-15', '2019-07-31'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.04', 'Rework',   '2018-02-15', '2019-07-31'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.05', 'Package',  '2018-02-15', '2019-07-31'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.06', 'Ship',     '2018-03-15', '2019-09-30'),
      new WAM('fflintstone', '123456', 'Double secret project', '01.02.07', 'Support',  '2018-03-15', '2019-09-30'),
      new WAM('fflintstone', 'CORP',   'Coporate',  '03.02.01', 'Travel',   '2017-01-01', '2020-12-31'),
      new WAM('fflintstone', 'CORP',   'Coporate',  '03.02.02', 'Training', '2017-01-01', '2020-12-31')
    ];

   }


   public getTimecard(): Timecard {
    return this.timecards[0];
  }


  public getWams(): WAM[] {
    return this.wams;
  }

}

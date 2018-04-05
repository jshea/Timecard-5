import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { MatSidenav } from '@angular/material';
import { MatIconRegistry } from '@angular/material';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { UserService } from './services/user.service';
import { Timecard } from './models/timecard';
import { WAM } from './models/wam';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector:    'tc-timecard',
  templateUrl: './timecard.component.html',
  styleUrls:  ['./timecard.component.css']
})
export class TimecardComponent implements OnInit {
  public wamsFS: Observable<any[]>;

  public timecard: Timecard = null;
  public wams: WAM[] = null;
  public feature: string;

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(private zone: NgZone,
              private afs: AngularFirestore,
              private userService: UserService) {
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
    this.wamsFS = afs.collection('wams').valueChanges();
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    // Load up our data
    this.timecard = this.userService.getTimecard();
    this.wams = this.userService.getWams();
    this.feature = 'timecard';                        // Default to timecard display

    // Initialize sidenav as required
    if (this.isScreenSmall()) {
      this.sidenav.close();
    }
  }

  public onListItemClick(feature: string): void {
    this.feature = feature;
  }

  private isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}

import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { User } from './models/user';
import { UserService } from './services/user.service';
import { Timecard } from './models/timecard';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector:    'tc-timecard',
  templateUrl: './timecard.component.html',
  styleUrls:  ['./timecard.component.css']
})
export class TimecardComponent implements OnInit {

  public timecard: Timecard = null;
  public feature: string;

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(zone: NgZone,
              private userService: UserService) {

    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this.timecard = this.userService.getTimecard();   // Load up our data
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

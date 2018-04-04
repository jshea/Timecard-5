import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from './shared/material.module';

// Services
import { UserService } from './services/user.service';

// Pipes
import { TcDatePipe } from './shared/pipes/tc-date.pipe';

// Components
import { TimecardComponent } from './timecard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TimecardInputComponent } from './components/timecard-input/timecard-input.component';
import { AccrualComponent } from './components/accrual/accrual.component';
import { AllocationComponent } from './components/allocation/allocation.component';
import { NewXxxDialogComponent } from './components/new-xxx-dialog/new-xxx-dialog.component';
import { WamComponent } from './components/wam/wam.component';

const routes: Routes = [
  {
    path: ':id',
    component: TimecardInputComponent
  },
  {
    path: '',
    component: TimecardInputComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    TcDatePipe,
    TimecardComponent,
    ToolbarComponent,
    TimecardInputComponent,
    AccrualComponent,
    AllocationComponent,
    NewXxxDialogComponent,
    WamComponent
  ],
  entryComponents: [
    NewXxxDialogComponent
  ],
  bootstrap: [
    TimecardComponent
  ]
})
export class TimecardModule { }

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector:    'tc-new-xxx-dialog',
  templateUrl: './new-xxx-dialog.component.html',
  styleUrls:  ['./new-xxx-dialog.component.css']
})
export class NewXxxDialogComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<NewXxxDialogComponent>,
              private userService: UserService) { }

  ngOnInit() {
  }


  save() {
    // this.userService.addUser(this.user).then(user => {
    //   this.dialogRef.close(user);
    // });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}

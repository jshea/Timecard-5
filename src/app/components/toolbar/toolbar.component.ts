import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { NewXxxDialogComponent } from '../new-xxx-dialog/new-xxx-dialog.component';

@Component({
  selector:    'tc-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls:  ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() { }

  openAddXxxDialog(): void {
    const dialogRef = this.dialog.open(NewXxxDialogComponent, { width: '450px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (result) {
        this.openSnackBar('XXX added', 'Navigate')
            .onAction().subscribe(() => {
              this.router.navigate(['/', result.id]);
            });
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}

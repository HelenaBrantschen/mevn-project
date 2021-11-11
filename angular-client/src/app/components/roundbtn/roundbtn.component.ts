import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayComponent } from '../overlay/overlay.component';
 

@Component({
  selector: 'app-roundbtn',
  templateUrl: './roundbtn.component.html',
  styleUrls: ['./roundbtn.component.scss']
})
export class RoundbtnComponent {

  constructor(public dialog: MatDialog) { }

 
  public openDialog(): void {
    const dialogRef = this.dialog.open(OverlayComponent, {
      width: '250px',
     
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

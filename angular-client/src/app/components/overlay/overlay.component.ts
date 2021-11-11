import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  constructor(
    public dialogRef: MatDialogRef<OverlayComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface Element {
  value: string;
  viewValue: string;
  icon: any;
}

interface CategoryGroup {
  disabled?: boolean;
  name: string;
  element: Element[];
  
}


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  textFormControl = new FormControl('', [Validators.required]);
  titleFormControl = new FormControl('', [Validators.required]);
  notesFormControl = new FormControl('', [Validators.required ]);
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  categoryControl = new FormControl();
  categoryGroups: CategoryGroup[] = [
    {
      name: 'Trip',
      element: [
        

{value: 'look-0', icon: 'add', viewValue: 'Look around'},
{value: 'promenade-1', icon: 'add',viewValue: 'Promenade'},
{value: 'visit-2', icon: 'add',viewValue: 'Visit'},
{value: 'daycation-3', icon: 'add', viewValue: 'daycation'},
{value: 'city-4', icon: 'add',viewValue: 'City Trip'},
{value: 'sightseeing-5', icon: 'add', viewValue: 'Sightseeing Tour'},
      ],
    },
    {
      name: 'Vacation & Travel',
      element: [
        {value: 'vacation-1', icon: 'add', viewValue: 'Vacation'},
        {value: 'boat-2', icon: 'add', viewValue: 'Boat Tour'},
        {value: 'bike-3',icon: 'add', viewValue: 'Bike Tour'},
        {value: 'road-3',icon: 'add', viewValue: 'Road Trip'},
        {value: 'backpack-4',icon: 'add', viewValue: 'Backpacking'},

      ],
    },
    {
      name: 'Specific',
      disabled: false,
      element: [
        {value: 'business-0', icon: 'add', viewValue: 'Business Trip'},
        {value: 'spa-1', icon: 'add', viewValue: 'Spa & Rest'},
        {value: 'road-2', icon: 'add', viewValue: 'Adventure Holidays'},
        {value: 'sport-3', icon: 'add', viewValue: 'Sport Holidays'},
        {value: 'else-4', icon: 'add', viewValue: 'Else'},

      ],
    }
  ];


  constructor(
    public dialogRef: MatDialogRef<OverlayComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
 



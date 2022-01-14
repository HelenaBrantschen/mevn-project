import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

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
  styleUrls: ['./overlay.component.scss'],
})

export class OverlayComponent {

  selectedOption:any = "---Choose---"
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
        {value: 'promenade-1', icon: 'nature_people', viewValue: 'Promenade'},
        {value: 'visit-2', icon: 'account_balance', viewValue: 'Visit'},
        {value: 'visit-2', icon: 'people', viewValue: 'Visit'},
        {value: 'daycation-3', icon: 'today', viewValue: 'daycation'},
        {value: 'city-4', icon: 'location_city',viewValue: 'City Trip'},
        {value: 'sightseeing-5', icon: 'insights', viewValue: 'Sightseeing Tour'},

      ],
    },
    {
      name: 'Vacation & Travel',
      element: [
        {value: 'vacation-1', icon: 'beach_access', viewValue: 'Vacation'},
        {value: 'boat-2', icon: 'directions_boat', viewValue: 'Boat Tour'},
        {value: 'bike-3',icon: 'directions_bike', viewValue: 'Bike Tour'},
        {value: 'road-3',icon: 'drive_eta', viewValue: 'Road Trip'},
        {value: 'backpack-4', icon: 'travel_explore', viewValue: 'Backpacking'},
      ],
    },
    {
      name: 'Specific',
      disabled: false,
      element: [
        {value: 'business-0', icon: 'card_travel', viewValue: 'Business Trip'},
        {value: 'spa-1', icon: 'hot_tub', viewValue: 'Spa & Rest'},
        {value: 'road-2', icon: 'rocket_launch', viewValue: 'Adventure Holidays'},
        {value: 'sport-3', icon: 'downhill_skiing', viewValue: 'Sport Holidays'},
        {value: 'celeb-4', icon: 'celebration', viewValue: 'Celebration'},
        {value: 'night-4', icon: 'nightlife', viewValue: 'Nightlive'},
        {value: 'natur-5', icon: 'park', viewValue: 'Natur'},

      ],
    }
  ];
   
  fileToUpload: any;

  constructor(
    public dialogRef: MatDialogRef<OverlayComponent>,
    private httpService: HttpService
  ) {}

  handleFileInput(event: Event) {
    const target= event.target as HTMLInputElement;
    this.fileToUpload = (target.files as FileList)[0];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveAlbum(): void{
    const formData = new FormData();
    formData.append('image', this.fileToUpload);
    formData.append('title', this.titleFormControl.value);
    formData.append('category', JSON.stringify(this.categoryControl.value));

    formData.append('content', this.notesFormControl.value);
    let datesFormatted = this.range.value["start"] +" - " + this.range.value["end"] 

   formData.append('dates',datesFormatted ) ;
   


    
   
   this.httpService.savePost(formData);
   this.dialogRef.close();


    //Validation to do 
    }

  }

 



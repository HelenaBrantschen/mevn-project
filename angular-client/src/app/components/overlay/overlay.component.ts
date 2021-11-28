import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface Element {
  value: string;
  viewValue: string;
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
      name: 'Grass',
      element: [
        {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
        {value: 'oddish-1', viewValue: 'Oddish'},
        {value: 'bellsprout-2', viewValue: 'Bellsprout'},
      ],
    },
    {
      name: 'Water',
      element: [
        {value: 'squirtle-3', viewValue: 'Squirtle'},
        {value: 'psyduck-4', viewValue: 'Psyduck'},
        {value: 'horsea-5', viewValue: 'Horsea'},
      ],
    },
    {
      name: 'Fire',
      disabled: false,
      element: [
        {value: 'charmander-6', viewValue: 'Charmander'},
        {value: 'vulpix-7', viewValue: 'Vulpix'},
        {value: 'flareon-8', viewValue: 'Flareon'},
      ],
    },
    {
      name: 'Psychic',
      element: [
        {value: 'mew-9', viewValue: 'Mew'},
        {value: 'mewtwo-10', viewValue: 'Mewtwo'},
      ],
    },
  ];


  constructor(
    public dialogRef: MatDialogRef<OverlayComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
 



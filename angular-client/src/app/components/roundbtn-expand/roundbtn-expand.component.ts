import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roundbtn-expand',
  templateUrl: './roundbtn-expand.component.html',
  styleUrls: ['./roundbtn-expand.component.scss']
})
export class RoundbtnExpandComponent {

  constructor() { }

  public expandOptions():void {
    console.log('The Options are expanded');

  }

}


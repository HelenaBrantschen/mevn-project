import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundbtnExpandComponent } from './roundbtn-expand.component';

describe('RoundbtnExpandComponent', () => {
  let component: RoundbtnExpandComponent;
  let fixture: ComponentFixture<RoundbtnExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundbtnExpandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundbtnExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

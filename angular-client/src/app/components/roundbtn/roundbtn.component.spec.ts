import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundbtnComponent } from './roundbtn.component';

describe('RoundbtnComponent', () => {
  let component: RoundbtnComponent;
  let fixture: ComponentFixture<RoundbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

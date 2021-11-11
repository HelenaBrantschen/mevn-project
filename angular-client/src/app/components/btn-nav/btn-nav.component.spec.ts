import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNavComponent } from './btn-nav.component';

describe('BtnNavComponent', () => {
  let component: BtnNavComponent;
  let fixture: ComponentFixture<BtnNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

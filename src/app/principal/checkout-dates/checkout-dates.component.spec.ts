import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDatesComponent } from './checkout-dates.component';

describe('CheckoutDatesComponent', () => {
  let component: CheckoutDatesComponent;
  let fixture: ComponentFixture<CheckoutDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDatesComponent } from './profile-dates.component';

describe('ProfileDatesComponent', () => {
  let component: ProfileDatesComponent;
  let fixture: ComponentFixture<ProfileDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

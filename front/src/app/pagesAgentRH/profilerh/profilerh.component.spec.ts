import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerhComponent } from './profilerh.component';

describe('ProfilerhComponent', () => {
  let component: ProfilerhComponent;
  let fixture: ComponentFixture<ProfilerhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilerhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilerhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

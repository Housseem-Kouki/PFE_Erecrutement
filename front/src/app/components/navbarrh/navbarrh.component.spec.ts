import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarrhComponent } from './navbarrh.component';

describe('NavbarrhComponent', () => {
  let component: NavbarrhComponent;
  let fixture: ComponentFixture<NavbarrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

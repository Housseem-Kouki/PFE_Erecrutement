import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavabarcComponent } from './navabarc.component';

describe('NavabarcComponent', () => {
  let component: NavabarcComponent;
  let fixture: ComponentFixture<NavabarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavabarcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavabarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaredRHComponent } from './dashboared-rh.component';

describe('DashboaredRHComponent', () => {
  let component: DashboaredRHComponent;
  let fixture: ComponentFixture<DashboaredRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboaredRHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboaredRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

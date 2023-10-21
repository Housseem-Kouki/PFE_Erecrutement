import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcComponent } from './sidebarc.component';

describe('SidebarcComponent', () => {
  let component: SidebarcComponent;
  let fixture: ComponentFixture<SidebarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

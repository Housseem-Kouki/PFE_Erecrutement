import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselmodalComponent } from './carousselmodal.component';

describe('CarousselmodalComponent', () => {
  let component: CarousselmodalComponent;
  let fixture: ComponentFixture<CarousselmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousselmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousselmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

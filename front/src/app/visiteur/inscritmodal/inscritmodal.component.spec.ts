import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritmodalComponent } from './inscritmodal.component';

describe('InscritmodalComponent', () => {
  let component: InscritmodalComponent;
  let fixture: ComponentFixture<InscritmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

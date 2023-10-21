import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaloffComponent } from './modaloff.component';

describe('ModaloffComponent', () => {
  let component: ModaloffComponent;
  let fixture: ComponentFixture<ModaloffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaloffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaloffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

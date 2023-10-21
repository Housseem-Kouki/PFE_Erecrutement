import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooetrcComponent } from './fooetrc.component';

describe('FooetrcComponent', () => {
  let component: FooetrcComponent;
  let fixture: ComponentFixture<FooetrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooetrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooetrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

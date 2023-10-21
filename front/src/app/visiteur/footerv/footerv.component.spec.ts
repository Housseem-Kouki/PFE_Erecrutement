import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootervComponent } from './footerv.component';

describe('FootervComponent', () => {
  let component: FootervComponent;
  let fixture: ComponentFixture<FootervComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootervComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

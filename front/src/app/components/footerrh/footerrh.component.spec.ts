import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterrhComponent } from './footerrh.component';

describe('FooterrhComponent', () => {
  let component: FooterrhComponent;
  let fixture: ComponentFixture<FooterrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

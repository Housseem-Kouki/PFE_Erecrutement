import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaraComponent } from './sidebara.component';

describe('SidebaraComponent', () => {
  let component: SidebaraComponent;
  let fixture: ComponentFixture<SidebaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

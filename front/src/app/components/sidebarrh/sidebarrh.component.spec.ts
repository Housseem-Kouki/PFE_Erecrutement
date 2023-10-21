import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarrhComponent } from './sidebarrh.component';

describe('SidebarrhComponent', () => {
  let component: SidebarrhComponent;
  let fixture: ComponentFixture<SidebarrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

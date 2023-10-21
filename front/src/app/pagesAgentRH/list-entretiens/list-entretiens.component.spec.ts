import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntretiensComponent } from './list-entretiens.component';

describe('ListEntretiensComponent', () => {
  let component: ListEntretiensComponent;
  let fixture: ComponentFixture<ListEntretiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntretiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntretiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

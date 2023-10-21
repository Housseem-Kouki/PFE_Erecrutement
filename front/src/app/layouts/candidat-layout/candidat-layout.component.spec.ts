import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatLayoutComponent } from './candidat-layout.component';

describe('CandidatLayoutComponent', () => {
  let component: CandidatLayoutComponent;
  let fixture: ComponentFixture<CandidatLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

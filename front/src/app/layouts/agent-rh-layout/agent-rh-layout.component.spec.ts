import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRHLayoutComponent } from './agent-rh-layout.component';

describe('AgentRHLayoutComponent', () => {
  let component: AgentRHLayoutComponent;
  let fixture: ComponentFixture<AgentRHLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentRHLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentRHLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

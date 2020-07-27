import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawScreenComponent } from './withdraw-screen.component';

describe('WithdrawScreenComponent', () => {
  let component: WithdrawScreenComponent;
  let fixture: ComponentFixture<WithdrawScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

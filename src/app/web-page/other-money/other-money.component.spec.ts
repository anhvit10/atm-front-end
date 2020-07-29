import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMoneyComponent } from './other-money.component';

describe('OtherMoneyComponent', () => {
  let component: OtherMoneyComponent;
  let fixture: ComponentFixture<OtherMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

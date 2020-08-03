import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptBalanceComponent } from './receipt-balance.component';

describe('ReceiptBalanceComponent', () => {
  let component: ReceiptBalanceComponent;
  let fixture: ComponentFixture<ReceiptBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithrawSuccessComponent } from './withraw-success.component';

describe('WithrawSuccessComponent', () => {
  let component: WithrawSuccessComponent;
  let fixture: ComponentFixture<WithrawSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithrawSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithrawSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

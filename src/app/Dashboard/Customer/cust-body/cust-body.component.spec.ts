import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustBodyComponent } from './cust-body.component';

describe('CustBodyComponent', () => {
  let component: CustBodyComponent;
  let fixture: ComponentFixture<CustBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

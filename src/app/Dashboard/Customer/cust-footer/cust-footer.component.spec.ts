import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustFooterComponent } from './cust-footer.component';

describe('CustFooterComponent', () => {
  let component: CustFooterComponent;
  let fixture: ComponentFixture<CustFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRestComponent } from './login-rest.component';

describe('LoginRestComponent', () => {
  let component: LoginRestComponent;
  let fixture: ComponentFixture<LoginRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

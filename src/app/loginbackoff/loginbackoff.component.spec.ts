import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbackoffComponent } from './loginbackoff.component';

describe('LoginbackoffComponent', () => {
  let component: LoginbackoffComponent;
  let fixture: ComponentFixture<LoginbackoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbackoffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginbackoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeclientComponent } from './subscribeclient.component';

describe('SubscribeclientComponent', () => {
  let component: SubscribeclientComponent;
  let fixture: ComponentFixture<SubscribeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

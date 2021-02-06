import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeagentComponent } from './subscribeagent.component';

describe('SubscribeagentComponent', () => {
  let component: SubscribeagentComponent;
  let fixture: ComponentFixture<SubscribeagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubagentsuccessComponent } from './subagentsuccess.component';

describe('SubagentsuccessComponent', () => {
  let component: SubagentsuccessComponent;
  let fixture: ComponentFixture<SubagentsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubagentsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubagentsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclientsuccessComponent } from './subclientsuccess.component';

describe('SubclientsuccessComponent', () => {
  let component: SubclientsuccessComponent;
  let fixture: ComponentFixture<SubclientsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubclientsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubclientsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

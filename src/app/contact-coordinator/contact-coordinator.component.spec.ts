import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCoordinatorComponent } from './contact-coordinator.component';

describe('ContactCoordinatorComponent', () => {
  let component: ContactCoordinatorComponent;
  let fixture: ComponentFixture<ContactCoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCoordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

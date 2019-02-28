import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanaRosterComponent } from './dana-roster.component';

describe('DanaRosterComponent', () => {
  let component: DanaRosterComponent;
  let fixture: ComponentFixture<DanaRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanaRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanaRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

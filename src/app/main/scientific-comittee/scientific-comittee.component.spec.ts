import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScientificComitteeComponent} from './scientific-comittee.component';

describe('ScientificComitteeComponent', () => {
  let component: ScientificComitteeComponent;
  let fixture: ComponentFixture<ScientificComitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificComitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificComitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

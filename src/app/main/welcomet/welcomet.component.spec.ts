import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcometComponent} from './welcomet.component';

describe('WelcometComponent', () => {
  let component: WelcometComponent;
  let fixture: ComponentFixture<WelcometComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcometComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcometComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConferenceFeeComponent} from './conference-fee.component';

describe('ConferenceFeeComponent', () => {
  let component: ConferenceFeeComponent;
  let fixture: ComponentFixture<ConferenceFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConferenceFeeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

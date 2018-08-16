import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSiteComponent } from './conference-site.component';

describe('ConferenceSiteComponent', () => {
  let component: ConferenceSiteComponent;
  let fixture: ComponentFixture<ConferenceSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

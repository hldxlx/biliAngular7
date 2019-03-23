import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscontenttwoComponent } from './newscontenttwo.component';

describe('NewscontenttwoComponent', () => {
  let component: NewscontenttwoComponent;
  let fixture: ComponentFixture<NewscontenttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscontenttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscontenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

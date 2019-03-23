import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScateComponent } from './scate.component';

describe('ScateComponent', () => {
  let component: ScateComponent;
  let fixture: ComponentFixture<ScateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

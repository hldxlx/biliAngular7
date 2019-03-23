import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KissComponent } from './kiss.component';

describe('KissComponent', () => {
  let component: KissComponent;
  let fixture: ComponentFixture<KissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

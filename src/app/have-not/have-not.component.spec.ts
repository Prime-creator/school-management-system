import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveNotComponent } from './have-not.component';

describe('HaveNotComponent', () => {
  let component: HaveNotComponent;
  let fixture: ComponentFixture<HaveNotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveNotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

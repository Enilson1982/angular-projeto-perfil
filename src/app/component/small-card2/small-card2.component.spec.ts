import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCard2Component } from './small-card2.component';

describe('SmallCard2Component', () => {
  let component: SmallCard2Component;
  let fixture: ComponentFixture<SmallCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

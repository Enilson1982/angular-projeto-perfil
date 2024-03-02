import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCard1Component } from './big-card1.component';

describe('BigCard1Component', () => {
  let component: BigCard1Component;
  let fixture: ComponentFixture<BigCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaleCardComponent } from './lale-card.component';

describe('LaleCardComponent', () => {
  let component: LaleCardComponent;
  let fixture: ComponentFixture<LaleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

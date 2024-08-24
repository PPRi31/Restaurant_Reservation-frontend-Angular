import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserva1Component } from './reserva1.component';

describe('Reserva1Component', () => {
  let component: Reserva1Component;
  let fixture: ComponentFixture<Reserva1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Reserva1Component]
    });
    fixture = TestBed.createComponent(Reserva1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


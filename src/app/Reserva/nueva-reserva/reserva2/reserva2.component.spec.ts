import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserva2Component } from './reserva2.component';

describe('Reserva2Component', () => {
  let component: Reserva2Component;
  let fixture: ComponentFixture<Reserva2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Reserva2Component]
    });
    fixture = TestBed.createComponent(Reserva2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

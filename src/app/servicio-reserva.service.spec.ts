import { TestBed } from '@angular/core/testing';

import { ServicioReservaService } from './servicio-reserva.service';

describe('ServicioReservaService', () => {
  let service: ServicioReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

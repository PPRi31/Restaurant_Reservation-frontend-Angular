import { TestBed } from '@angular/core/testing';

import { ModificarfilaService } from './modificarfila.service';

describe('ModificarfilaService', () => {
  let service: ModificarfilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarfilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

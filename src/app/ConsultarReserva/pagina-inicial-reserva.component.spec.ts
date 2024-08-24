import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialReservaComponent } from './pagina-inicial-reserva.component';

describe('PaginaInicialReservaComponent', () => {
  let component: PaginaInicialReservaComponent;
  let fixture: ComponentFixture<PaginaInicialReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaInicialReservaComponent]
    });
    fixture = TestBed.createComponent(PaginaInicialReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

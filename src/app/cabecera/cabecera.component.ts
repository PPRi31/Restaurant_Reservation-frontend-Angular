import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { InfoService } from '../info.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  
  constructor(public dialog: MatDialog,  public infoService : InfoService, private router: Router) {}
  estaLogueado: boolean = false;
  Login(){
    this.dialog.open(LoginComponent);
  }

  NuevaReserva(){
    this.router.navigate(['/NuevaReserva'])
  }
  // NuevaReserva(){
  //   this.router.navigate(['/NuevaReserva']);
  // }

  ConsultarReserva(){
    this.router.navigate(['/ConsultarReserva']);
  }
perfil(){
  this.router.navigate(['/perfil'])
}
inicio(){
  this.router.navigate(['/PaginaInicial']);
}
}

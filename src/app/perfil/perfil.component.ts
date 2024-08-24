import { ChangeDetectorRef, Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioInterface } from '../Interfaces/UsuarioInterface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  
})
export class PerfilComponent {
  constructor(private router:Router, public infoService: InfoService, private cdr: ChangeDetectorRef){}
  userName= '';
  userEmail= '';
  userTelefono = '';
  dataSource: any = [];
  InfoConsultar = new FormGroup({
    Nombre: new FormControl(),
    Transaccion: new FormControl()
  })

  ngOnInit(): void {
    this.InfoConsultar.value.Nombre= this.infoService.getUsername;
    this.InfoConsultar.value.Transaccion = "CONSULTA_USUARIO_NOMBRE";
    this.infoService.getInformacion(this.InfoConsultar.value as UsuarioInterface).subscribe((data: any) => {
      if (data.length > 0) {
        // Tomar el primer elemento del array (asumiendo que solo hay un usuario)
        const primerUsuario = data[0];

        // Asignar valores a las variables de usuario
        this.userName = primerUsuario.nombre;
        this.userEmail = primerUsuario.email;
        this.userTelefono = primerUsuario.telefono;

        console.log(data);
      } else {
        console.error('No se encontraron datos del usuario.');
      }
     
    
    },
      (errorData) => (alert("Usuario No autorizado"),
        this.router.navigate(['/'])))
  }


  mostrarPerfil() {
   
  }
  Resenia1(){
    this.router.navigate(['/Restaurante1']);
  }
  reserva1()
  {
    this.router.navigate(['/ConsultarReserva'])
  }

  Resenia2(){
    this.router.navigate(['/Restaurante2']);
  }


  user1 = {
    avatarUrl: 'https://placekitten.com/200/300' // Usando una imagen de gatito como ejemplo
  };
  
}

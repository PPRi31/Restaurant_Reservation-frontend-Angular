import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NuevaReservaComponent } from '../Reserva/nueva-reserva/nueva-reserva.component';
import { ServicioReservaService } from '../servicio-reserva.service';
import { DatePipe } from '@angular/common';
import { RestauranteInterface } from '../Interfaces/RestauranteInterface';
import { ReservaInterface } from '../Interfaces/ReservaInterface';
import { InfoService } from '../info.service';
import { UsuarioInterface } from '../Interfaces/UsuarioInterface';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';

export interface User {
  name: string;
}

@Component({
  selector: 'app-pagina-reserva',
  templateUrl: './pagina-reserva.component.html',
  styleUrls: ['./pagina-reserva.component.css'],
})
export class PaginaReservaComponent {
  restauranteControl = new FormControl();
  selectedOption: any;
  options: RestauranteInterface[] = [

  ];
  constructor(private router:Router,private dataReservaServicio: ServicioReservaService,private service : InfoService) {
    this.generarListaHoras();
  
      this.filteredOptions =this.reservaData.controls.restaurante.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      );

  }
  consultarTodos = new FormGroup({
  
    Transaccion: new FormControl()
  })
  userId = 0;
  transaccion = '';
  ngOnInit(): void {
    this.getInformacionUsuario();
    this.consultarTodos.value.Transaccion = "CONSULTA_TODOS_RESTAURANTES";
    this.service.getRestaurantes(this.consultarTodos.value as RestauranteInterface).subscribe((data: any) => {
      console.log(data);
      this.options = data
      console.log("datos llenados")
    },
    (errorData)=>  alert(errorData.error))  
    
  }
  restauranteSeleccionado: RestauranteInterface | null = null;
  userName= '';
  userEmail= '';
  userTelefono = '';

  InfoConsultar = new FormGroup({
    Nombre: new FormControl(),
    Transaccion: new FormControl()
  })

 
    Restaurante : RestauranteInterface = {
      direccion: "" , 
      telefono: "",
      nombre: "",
      precio_persona: 0
    };
    Nombre: any ;
    Cantidad_personas: any ;
    Fecha_reserva: any;
    Subtotal: any;
    Transaccion: any;
    Restaurante_id: any;
    horas: string[] = [];
 

  
  
  filteredOptions: Observable<RestauranteInterface[]>;

  reservaData = new FormGroup({
    
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    personas: new FormControl('', Validators.required),
    restaurante: new FormControl('', Validators.required),
  });

  objReserva = {};
  nSilla : any
  fecha: any

 

  
  generarListaHoras() {
    const horaActual = new Date().getHours();

    for (let i = 9; i <= 22; i++) {
      const horaFormateada = i < 10 ? '0' + i : '' + i;
      this.horas.push(`${horaFormateada}:00`);
    }
  }

   combinarFechaHora(): Date {
    let fechaFinal: Date = new Date(); 
    const fecha = this.reservaData.get('fecha')?.value
    const horario = this.reservaData.get('hora')?.value

    if(fecha != null && horario != null){
      const [hora, minutos] = horario.split(':');
      fechaFinal = new Date(fecha);
      fechaFinal.setHours(parseInt(hora, 10))
      fechaFinal.setMinutes(parseInt(minutos,10))
      return fechaFinal 
      }
    return fechaFinal


  }

  agregarReserva() {
    if (!this.reservaData.invalid) {
      
      const fechaFinal = this.combinarFechaHora();
      const idRest = this.getIdRestaurantePorNombre(this.reservaData.get('restaurante')?.value!)
      this.Nombre = this.reservaData.get('nombre')?.value;
      this.Cantidad_personas = Number(this.reservaData.get('personas')?.value);
      this.Fecha_reserva = this.reservaData.get('fecha')?.value;
      this.Transaccion = "INSERTAR_RESERVA";
      this.Restaurante_id = idRest
      const reservaData: ReservaInterface = {
          Nombre: this.Nombre,
          restaurante : {
            id: this.Restaurante_id
          },
          usuario: {
            Id: 1
          },
          Cantidad_personas: this.Cantidad_personas,
          Fecha: fechaFinal,
          Transaccion: this.Transaccion
      }
      console.log(reservaData)
      this.service.setReserva(reservaData).subscribe((data: any) => {
       console.log(data);
       if (data[0].respuesta === 'Ok') {
        alert(data[0].leyenda)
      } else {
        alert(data[0].leyenda);
      }
      },
      (errorData)=>  alert(errorData.error))  
    }
    this.reservaData.reset();
  }
 
  private _filter(value: string): RestauranteInterface[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(restaurante => restaurante.nombre?.toLowerCase().includes(filterValue));
  }
 

  getInformacionUsuario(){
  
    this.InfoConsultar.value.Nombre= this.service.getUsername;
    this.InfoConsultar.value.Transaccion = "CONSULTA_USUARIO_NOMBRE";
    this.service.getInformacion(this.InfoConsultar.value as UsuarioInterface).subscribe((data: any) => {
      if (data.length > 0) {
        // Tomar el primer elemento del array (asumiendo que solo hay un usuario)
        const primerUsuario = data[0];

        // Asignar valores a las variables de usuario
        this.userId = parseInt(primerUsuario.id)
        this.userName = primerUsuario.nombre;
        this.userEmail = primerUsuario.email;
        this.userTelefono = primerUsuario.telefono;

        //console.log(data);
        
      } else {
        console.error('No se encontraron datos del usuario.');
      }
     
    
    },
      (errorData) => (alert("Usuario No autorizado"),
        this.router.navigate(['/'])))
        
  }

  getIdRestaurantePorNombre(nombre: string){
    const id = this.options.find(restaurante => restaurante.nombre === nombre)?.id
    return id
  }

}

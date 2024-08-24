import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OpinionesInterface } from 'src/app/Interfaces/OpinionesInterface';
import { InfoService } from 'src/app/info.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-reserva2',
  templateUrl: './reserva2.component.html',
  styleUrls: ['./reserva2.component.css']
})


export class Reserva2Component  implements OnInit{

  selectedOption: string | null = null;
  toppings!: FormGroup;
  opinion: string = '';
  textosSeleccionados: string[] = [];
  valoracionesGuardadas: (string | null)[] = [];
  opinionGuardada: string | null = null;
  usuario: any;
  valoracion: any;
  comentario: any;
  puntuacion: any;
  tipo_Reserva: any;
  epoca_anio: any;
  transaccion: any;
  
 
  displayedColumns: string[] =['Nombre_Usuario','Valoracion','Comentario','Puntuacion'];
  dataSource: any =[];
  


  constructor(private _formBuilder: FormBuilder,private service : InfoService, private router: Router) {
    this.toppings = this._formBuilder.group({
      puntuacionviajeros: [],
      tiporeservacion: [],
      epoca: [],
    });
  }
  ngOnInit(): void {
    this.mostrarTodoComentarios();
  }
  
  manejarSeleccion(formControlName: string, texto: string): void {
    const control = this.toppings.get(formControlName);

    if (control) {
      if (control.value) {
        // Checkbox seleccionado
        this.textosSeleccionados.push(texto);
      } else {
        // Checkbox deseleccionado
        const index = this.textosSeleccionados.indexOf(texto);
        if (index !== -1) {
          this.textosSeleccionados.splice(index, 1);
        }
      }
      console.log(this.textosSeleccionados);
    }
  }

  
  selectOption(option: string) {
    this.selectedOption = option;
  }

  
  guardarOpinion(): void {
    if (this.selectedOption !== null && this.opinion.trim() !== '') {
      const nombreUsuario = localStorage.getItem('userName');
    

      this.usuario = nombreUsuario;
      this.valoracion = this.selectedOption;
      this.comentario = this.opinion;
      this.puntuacion = this.textosSeleccionados[0]; 
      this.tipo_Reserva = this.textosSeleccionados[1]; 
      this.epoca_anio = this.textosSeleccionados[2]; 
      this.transaccion = "INSERTAR_COMENTARIO_RESTAURANTE2";
      this.selectedOption = null;
      this.opinion = '';
      
      const opinionesData: OpinionesInterface = {
        Nombre_Usuario: this.usuario,
        Valoracion: this.valoracion,
        Comentario: this.comentario,
        Puntuacion: this.puntuacion,
        Tipo_Reserva: this.tipo_Reserva,
        Epoca_anio: this.epoca_anio,
        Transaccion: this.transaccion,
      };

      this.service.setOpinion(opinionesData).subscribe((data: any) => {
        console.log(data);
        alert("Se ingreso tu comentario");
        
      },
      (errorData)=>  alert(errorData.error))  
    } 
  }



  ConsultarTodosComentarios = new FormGroup({
    transaccion: new FormControl()
  })

  mostrarTodoComentarios(){
    this.ConsultarTodosComentarios.value.transaccion = "CONSULTA_COMENTARIO_TODOSR2";
    this.service.getOpinion(this.ConsultarTodosComentarios.value as OpinionesInterface).subscribe((data: any) => {
       this.dataSource = new MatTableDataSource<OpinionesInterface>(data as OpinionesInterface []);
      console.log(data);
      },
      (errorData)=>  alert(errorData.error))
  }

}

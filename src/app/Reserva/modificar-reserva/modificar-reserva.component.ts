import { Component, NgModule } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ModificarfilaService } from 'src/app/modificarfila.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { PaginaInicialReservaComponent } from 'src/app/ConsultarReserva/pagina-inicial-reserva.component';
import { ServicioReservaService } from 'src/app/servicio-reserva.service';
import { ReservaInterface } from 'src/app/Interfaces/ReservaInterface';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrls: ['./modificar-reserva.component.css'],
})
export class ModificarReservaComponent {
  datageneral: any;

  indice: any;

  ReservaData = new FormGroup({
    nombre: new FormControl('', Validators.required),
    fecha_reserva: new FormControl('', Validators.required),
    cantidad_personas: new FormControl(0, Validators.required),
    restaurante_id: new FormControl(0, Validators.required),
    usuario_id: new FormControl(0, Validators.required),
  });

  constructor(
    private dialogRef: MatDialogRef<ModificarfilaService>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: InfoService
  ) {
    
    this.datageneral = data.data[0];
    const datarecibida = data.data[0];
    //this.moddata = data.rowData;
    this.ReservaData.patchValue({
      nombre: datarecibida.nombre,
      restaurante_id: datarecibida.restaurante.id,
      usuario_id: datarecibida.usuario.id,
      cantidad_personas: datarecibida.cantidad_Personas,
      fecha_reserva: datarecibida.fecha,
    });

    console.log(this.ReservaData);
  }
  ngOnInit() {}

  AgregarUsario() {
    console.log(typeof this.datageneral.id);

    const datosReserva: ReservaInterface = {
      Id: this.datageneral.id,
      Nombre: this.ReservaData.value.nombre!,
      Cantidad_personas: this.ReservaData.value.cantidad_personas!,
      usuario: {
        Id: this.ReservaData.value.usuario_id!,
      },
      restaurante: {
        id: this.ReservaData.value.restaurante_id!,
      },
      Fecha: new Date(this.ReservaData.value.fecha_reserva!),
      Transaccion: 'ACTUALIZAR_RESERVA_ID',
    };

    console.log(datosReserva);

    this.service.updateReservaId(datosReserva).subscribe(
      (data: any) => {
        console.log(data);
        if (data[0].respuesta === 'Ok') {
          this.dialogRef.close();
        } else {
          alert(data[0].leyenda);
        }
      },
      (errorData) => alert(errorData.error)
    );

  }
}

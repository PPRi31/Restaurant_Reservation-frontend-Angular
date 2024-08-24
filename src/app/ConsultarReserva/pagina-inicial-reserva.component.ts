import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InfoService } from '../info.service';
import { ModificarReservaComponent } from '../Reserva/modificar-reserva/modificar-reserva.component';
import { ModificarfilaService } from '../modificarfila.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AgregarComponent } from '../Reserva/agregar/agregar.component';

import { MatDialogRef } from '@angular/material/dialog';
import { ServicioReservaService } from '../servicio-reserva.service';
import { ReservaInterface } from '../Interfaces/ReservaInterface';


@Component({
  selector: 'app-pagina-inicial-reserva',
  templateUrl: './pagina-inicial-reserva.component.html',
  styleUrls: ['./pagina-inicial-reserva.component.css'],
})
export class PaginaInicialReservaComponent implements OnInit{
  displayedColumns: string[] = [
    'id_reserva',
    'nombre_usuario',
    'email',
    'nombre_cliente',
    'cantidad_personas',
    'nombre_restaurante',
    'direccion_restaurante',
    'fecha_reserva',
    'precio_persona',
    'subtotal',
    'acciones'
    
  ];

  dataSource = new MatTableDataSource<ReservaInterface>();
  reservaData: ReservaInterface = {
    Id: 0,
    Transaccion: ""
  }



  nav: any;
  nuevoUsuario: any;
  selectedRow: any;
  //dataSource: any;
  dataRecibida: any;
  elementosArray: any;
  
  constructor(private infoService: InfoService, private aRoute: ActivatedRoute, public dialog: MatDialog) {
   
  }

  ngOnInit(): void{
    this.obtenerReservas();
  }


  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerReservas(){
   this.reservaData.Transaccion ="CONSULTA_TODOS_RESERVA"
    this.infoService.getReservasCustom(this.reservaData).subscribe((data: any) => {
       console.log(data);
       this.dataSource.data = data; 
    },
    (errorData)=>  alert(errorData.error))  
  }

  eliminarReserva(id: number){
    this.reservaData.Id = id;
    this.reservaData.Transaccion ="ELIMINAR_RESERVA_ID"
    console.log(this.reservaData)
    this.infoService.deleteReservaId(this.reservaData).subscribe((data: any) => {
       console.log(data);
       if (data[0].respuesta === 'Ok') {
        alert(data[0].leyenda);
      } else {
        alert(data[0].leyenda);
      }
       
       this.obtenerReservas();
    },
    (errorData)=>  alert(errorData.error)) 
  }
  actualizarReserva(id: number){
    this.reservaData.Id = id;
    this.reservaData.Transaccion= "CONSULTA_RESERVA_ID"
    this.infoService.getReservaById(this.reservaData).subscribe((data: any) => {
      console.log(data)
      this.openEditDialog(data);
    
      
    })
  }
  openEditDialog(data: ReservaInterface): void {
    const dialogRef = this.dialog.open(ModificarReservaComponent, {
      data: { data },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.obtenerReservas();

    });
  }

}

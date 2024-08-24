import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialReservaComponent } from './ConsultarReserva/pagina-inicial-reserva.component';
import { InicioPaginaComponent } from './inicio-pagina/inicio-pagina.component';
import { NuevaReservaComponent } from './Reserva/nueva-reserva/nueva-reserva.component';
import { Reserva1Component } from './Reserva/nueva-reserva/reserva1/reserva1.component';
import { PerfilComponent } from './perfil/perfil.component';
import { Reserva2Component } from './Reserva/nueva-reserva/reserva2/reserva2.component';
import { PaginaReservaComponent } from './pagina-reserva/pagina-reserva.component';



const routes: Routes = [
  {path:'',component: InicioPaginaComponent},
  {path:'PaginaInicial',component: InicioPaginaComponent},
  {path:'ConsultarReserva',component: PaginaInicialReservaComponent},
   {path:'NuevaReserva2',component: NuevaReservaComponent},
  {path:'NuevaReserva',component: PaginaReservaComponent},
  {path:'Restaurante1',component: Reserva1Component},
  {path:'perfil',component: PerfilComponent},
  {path:'Restaurante2',component: Reserva2Component}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaInicialReservaComponent } from './ConsultarReserva/pagina-inicial-reserva.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card'; 
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { InicioPaginaComponent } from './inicio-pagina/inicio-pagina.component';
import { FooterComponent } from './footer/footer.component'; 
import {MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { ModificarReservaComponent } from './Reserva/modificar-reserva/modificar-reserva.component';
import { FormsModule } from '@angular/forms';
import { NuevaReservaComponent } from './Reserva/nueva-reserva/nueva-reserva.component';
import { Reserva1Component } from './Reserva/nueva-reserva/reserva1/reserva1.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Reserva2Component } from './Reserva/nueva-reserva/reserva2/reserva2.component';
import { PaginaReservaComponent } from './pagina-reserva/pagina-reserva.component';


import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {AsyncPipe} from '@angular/common';
import { DatePipe } from '@angular/common';


import { AgregarComponent } from './Reserva/agregar/agregar.component';
import { InfoService } from './info.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialReservaComponent,
    CabeceraComponent,
    LoginComponent,
    InicioPaginaComponent,
    FooterComponent,
    ModificarReservaComponent,
    NuevaReservaComponent,
    Reserva1Component,
    RegistroComponent,
    PerfilComponent,
    Reserva2Component,
    PaginaReservaComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    AsyncPipe,
    DatePipe,
    HttpClientModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, InfoService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

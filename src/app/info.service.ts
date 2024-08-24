import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UsuarioInterface } from './Interfaces/UsuarioInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OpinionesInterface } from './Interfaces/OpinionesInterface';
import { ReservaInterface } from './Interfaces/ReservaInterface';
import { RestauranteInterface } from './Interfaces/RestauranteInterface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) {
    
  }
  user_email: any;
  isLogged = true;
  users: any[]=[
    'josue'
  ];
  data: any[] = [
    {
      user: 'josue', mail: 'josue@gmail.com', clave: '123', telefono: '0987654321'
    }
  ];

  getUsersData() {
    return this.data;
  }
  addUserData(newUser: any) {
    this.data.push(newUser);
  }
  getUserByUsername(username: string) {
    // Utiliza el método `find` en el arreglo `data`
  // para buscar un usuario cuyo nombre de usuario coincida con el parámetro `username`.
    return this.data.find(user => user.user === username);
  }
  currentUser: any;

  // Método para establecer el usuario actual
  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  // Método para obtener el usuario actual
  getCurrentUser() {
    return this.currentUser;
  }
  ///nuevo conexion api
  baseUrl: string = "http://localhost:7197/api/Usuario/Getlogin";
  baseUrlInformacion: string = "http://localhost:7197/api/Usuario/GetUsuariotr";
  baseUrlOpinionGuardar: string = "http://localhost:7197/api/UsuarioComentario/SetComentariotr";
  baseUrlTraerOpinion: string = "http://localhost:7197/api/UsuarioComentario/GetComentariotr";
  baseUrlReservaGuardar: string = "http://localhost:7197/api/Reserva/SetReservatr";
  baseUrlRegistrarUsuario: string= "http://localhost:7197/api/Usuario/SetUsuario";
  baseUrlObtenerRestaurantes: string = "http://localhost:7197/api/Restaurante/GetRestauranteTr";
  baseUrlObtenerCustomReserva: string = "http://localhost:7197/api/Reserva/GetReservaTr";
  //baseUrlObtenerReservas: string = "http://localhost:7197/api/Reserva/GetReservasTr";
  baseUrlObtenerReservaId: string = "http://localhost:7197/api/Reserva/GetReservatr_id";
  


  login(user: UsuarioInterface){
   return this.http.post(this.baseUrl, user);
  }

  RegistrarUser(nuevo: UsuarioInterface){
    return this.http.post(this.baseUrlRegistrarUsuario, nuevo);
   }


 get getUsername(){
    return localStorage.getItem('userName');
  }
 get isAutenticado(){
   return !!localStorage.getItem('token_value');
  }
  
 


 getInformacion(iPerfil: UsuarioInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
    } )
    return this.http.post(this.baseUrlInformacion, iPerfil, {headers: header})
  }

  setOpinion(iopinion: OpinionesInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
      
    } )
    return this.http.post(this.baseUrlOpinionGuardar, iopinion, {headers: header})
  }

  getOpinion(iopinion: OpinionesInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
      
    } )
    return this.http.post(this.baseUrlTraerOpinion, iopinion, {headers: header})
  }


//Davila

  setReserva(ireserva: ReservaInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
      
    } )
    return this.http.post(this.baseUrlReservaGuardar, ireserva, {headers: header})
  }

  updateReservaId(ireserva: ReservaInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
      
    } )
    return this.http.post(this.baseUrlReservaGuardar, ireserva, {headers: header})
  }
  deleteReservaId(ireserva: ReservaInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
      
    } )
    return this.http.post(this.baseUrlReservaGuardar, ireserva, {headers: header})
  }

  getReservasCustom(iReserva: ReservaInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
      
    } )
    return this.http.post(this.baseUrlObtenerCustomReserva, iReserva, {headers: header  })
  }
  getReservaById(iReserva: ReservaInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
      
    } )
    return this.http.post(this.baseUrlObtenerReservaId, iReserva, {headers: header  })
  }

  getRestaurantes(iRestaurante: RestauranteInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
      
    } )
    return this.http.post(this.baseUrlObtenerRestaurantes, iRestaurante, {headers: header  })
  }

  getRestaurantesById(iRestaurante: RestauranteInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `bearer ${auth_token}`
      
    } )
    return this.http.post(this.baseUrlObtenerRestaurantes, iRestaurante, {headers: header  })
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent {

 constructor(private router:Router){}


  Resenia1(){
    this.router.navigate(['/Restaurante1']);
  }
}

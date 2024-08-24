import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioReservaService {

  private messageSource = new BehaviorSubject<Array<string>>([]);
  elementoActual = this.messageSource.asObservable();

  
  constructor() { }


  agregarElemento(elemento: any ){
    const valorActual = this.messageSource.value;
    const valorActualizado = [...valorActual, elemento];
    this.messageSource.next(valorActualizado);
  }

  actualizarElemento(index: number, elemento: any) {
    console.log("index:  "+index)
    const valorActual = this.messageSource.value.slice(); 
    valorActual[index] = elemento; 
    console.log(valorActual)
    this.messageSource.next(valorActual); 
  }


  eliminarElemento(index: number) {
    const valorActual = this.messageSource.value.slice(); 
    valorActual.splice(index, 1); 
    
    this.messageSource.next(valorActual);
  }

  
}

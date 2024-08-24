import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { InfoService } from '../info.service';
import { UsuarioInterface } from '../Interfaces/UsuarioInterface';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private dialogRef: MatDialogRef<RegistroComponent>,  private service : InfoService) {}
  hide = true;
  id:  any;
  nombre:   any;
  email:   any;
  password:  any;
  telefono:  any;
  transaccion: any;
  data: any[]=[
    {
      user: 'josue', mail: 'josue@gmail.com',clave: '123', telefono: '0987654321'
    }
  ];

  formulario = new FormGroup({
    Id: new FormControl('', Validators.required),
    Nombre: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    Telefono: new FormControl('', Validators.required)
  });
  
  aceptar(){
   // if (this.formulario.valid) {
      // Obtén los valores del formulario
       // Obtén los valores del formulario
     //  const newUser = this.formulario.value;

       // Añade el nuevo usuario al servicio
     //  this.infoService.addUserData(newUser);
    //  this.data.push(this.formulario.value);
    //  this.infoService.users.push(this.formulario.value.user)
    //  this.dialogRef.close();
    //  this.formulario.reset();
  //    alert('Número de elementos en el arreglo:' + this.data.length);
   // } else {
      // Manejar el caso cuando el formulario no es válido
    //  console.log('Formulario no válido. Verifica los campos.');
    //}
  }
  guardarUsuario(): void {
    if (this.formulario.valid) {
    
      this.id = this.formulario.value.Id;
      this.nombre = this.formulario.value.Nombre;
  
      this.email = this.formulario.value.Email; 
      this.password = this.formulario.value.Password;
      this.telefono =  this.formulario.value.Telefono; 

      this.transaccion = "INSERTAR_USUARIO";
      
      const formulario: UsuarioInterface = {
        Id: this.id,
        Nombre: this.nombre,
        Email: this.email,
        Password: this.password,
        Telefono: this.telefono,
        Transaccion: this.transaccion
       
      };

      this.service. RegistrarUser(formulario).subscribe((data: any) => {
        console.log(data);
        alert(data);
      },
      (errorData)=>  alert(errorData.error))  
    } 
  }


  }



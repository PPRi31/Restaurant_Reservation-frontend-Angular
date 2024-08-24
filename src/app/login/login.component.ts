import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistroComponent } from '../registro/registro.component';
import { UsuarioInterface } from '../Interfaces/UsuarioInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public dialog: MatDialog, private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private service: InfoService) { }
  hide = true;
  tmp_Nombre: any;
  tmp_clave: any;

  usuarioLogin = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    Transaccion: new FormControl()
  })
  validarAcceso() {
    this.usuarioLogin.value.Transaccion="CONSULTAR_USUARIO_LOGIN";

    this.tmp_Nombre = this.usuarioLogin.value.Nombre;
    console.log("soy nombre: "+this.tmp_Nombre);
    
    this.service.login(this.usuarioLogin.value as UsuarioInterface).subscribe((data:any) =>{
      console.log("soy:  "+data);
    
      localStorage.setItem('userName', this.tmp_Nombre);
      localStorage.setItem('token_value',data);
      this.router.navigate(['/perfil']);
      this.service.isLogged = false;
      this.dialogRef.close();
    
      },
      (errorData)=>  alert(errorData.error))   
  }
  Registro() {
    this.dialog.open(RegistroComponent);
  }

}

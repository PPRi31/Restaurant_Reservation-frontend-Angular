import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
  
})
export class AgregarComponent {
  form: FormGroup;

  @Output() nuevoRegistro: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AgregarComponent>) {
    this.form = this.fb.group({
      position: ['', Validators.required],
      cliente: ['', Validators.required],
      fecha: ['00/00/00', Validators.required],
      hora: ['00:00', Validators.required],
      pe: ['', Validators.required],
      lg: ['', Validators.required],
    });
  }

  Agregar() {
    if (this.form.valid) {
      const nuevoRegistro = this.form.value;
      this.nuevoRegistro.emit(nuevoRegistro);
      this.dialogRef.close();
    }
  }
}

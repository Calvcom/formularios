import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Inversor Calvcom',
    precio: 20,
    existencias: 20
  }
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  constructor() {}

  ngOnInit(): void {

  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid &&
           this.miFormulario?.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.touched &&
           this.miFormulario?.controls['precio']?.value < 0;
  }

  //guardar( miFormulario: NgForm) {
    guardar(): void {
      console.log( this.miFormulario);
      console.log( 'Posteo correcto');

      this.miFormulario.resetForm({
        precio: 0,
        existencias: 0
      });
    }

}



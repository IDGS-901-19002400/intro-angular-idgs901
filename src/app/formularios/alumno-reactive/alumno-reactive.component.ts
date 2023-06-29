import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  //esta variable es para guardar el formulario reactivo
  alumnoForm!: FormGroup;

  //es para construir el formulario reactivo
  constructor(private readonly fb: FormBuilder) {

    this.alumnoForm = this.initForm();
  }

  //el metodo onsubmit es para guardar los datos del formulario reactivo
  onSubmit(): void {
    console.log('Form ->', this.alumnoForm.value);

  }

  //El metodo obtener datos es para 

  obtenerDatos():void{

    const mat = this.alumnoForm.get('matricula')?.value
    console.log('matricula', mat)

    const nom = this.alumnoForm.get('nombre')?.value
    console.log('nombre', nom)


  }

  //el initForm es para inicializar el formulario reactivo 

  initForm() {
    return this.fb.group({
      matricula: ['', [Validators.required, Validators.minLength(5)]],
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      edad: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      foto: [''],
      calif: ['', [Validators.required]]
    })
  }

}

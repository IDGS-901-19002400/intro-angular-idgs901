import { Component } from '@angular/core';

//Creacion de la clase

@Component({

    selector: 'app-ievn',
    template: `
    <form>
       <div>Nombre: {{alumno.nombre}}</div>
         <div>Matricula: {{alumno.matricula}}</div>
            <div>Edad: {{alumno.edad}}</div>
                <div>Fecha de Nacimiento: {{alumno.fechaNacimiento}}</div>
                    <div>Pago: {{alumno.pago | currency}}</div>
        <br>
        <button class="btn btn-primary">Ingresa</button>
    </form>`
})

export class ievnComponent {

    //Propiedades
    title = 'intro-angular-idgs901';

    alumno = {
        matricula : 19002400,
        nombre: 'Ana',
        edad: 23,
        fechaNacimiento: new Date(),
        pago: 128.38
    };

}






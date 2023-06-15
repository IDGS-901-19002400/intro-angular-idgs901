import { Component } from "@angular/core";

//Creacion de clase

@Component({

    selector: 'app-utl',
    template: `
    <form>
        <label for="">Nombre:</label>
        <input type="text" value="">
        <br>
        <button class="btn btn-primary">Ingresa</button>
    </form>`
})

export class utlComponent{

    constructor(){}

}
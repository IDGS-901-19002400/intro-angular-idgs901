import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imagenWidth : number = 50;
  imagenMargin :number = 2;
  mostrarImg: boolean = true;
  listFilter : string = '';
  alumnoTitle!: string ;

  showImg() : void{
    this.mostrarImg = !this.mostrarImg;
  }

  alumnosIric : IAlumnosIric[] = [
    {
      matricula : 1234,
      nombre: 'Adele 2018',
      edad: 23,
      correo: 'pedro@gmail.com',
      img : 'https://cdn.britannica.com/98/163898-050-B2E2A704/British-sensation-Adele.jpg',
      calificacion: 10
    },
    {
      matricula : 19002400,
      nombre: 'Adele 2019',
      edad: 23,
      correo: 'pedro@gmail.com',
      img : 'https://cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/CVYYGGZBDROP7FCFTFFPAUSZG4.jpg',
      calificacion: 7
    },
    {
      matricula : 19002212,
      nombre: 'Adele 2023',
      edad: 23,
      correo: 'pedro@gmail.com',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4clT9nRfycnUrQ5kMoS2fDjU1fRfV1t6QM1ndO-V1j4EFSIPNPF6zEbKZh3HyTIyuOyY&usqp=CAU',
      calificacion: 6
    },
  ];

  onCalificaClick(message: string){

    this.alumnoTitle = `alumnos ${message}`;
  }
}

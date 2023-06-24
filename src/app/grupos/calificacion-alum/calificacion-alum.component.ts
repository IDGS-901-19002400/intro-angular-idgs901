import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})
export class CalificacionAlumComponent {

 @Input() califica!: number;

@Output() calificaClick:EventEmitter<string>=new EventEmitter();
puntosCal!:number;

ngOnChanges():void {
  this.puntosCal = this.califica*75/10;
}

onClick(){
  this.calificaClick.emit(`Has calificado al alumno ${this.califica}`)
}

}

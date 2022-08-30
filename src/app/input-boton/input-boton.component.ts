import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-boton',
  templateUrl: './input-boton.component.html',
  styleUrls: ['./input-boton.component.scss']
})
export class InputBotonComponent implements OnInit {

  @Output() nuevaTareaEvent = new EventEmitter<string>();

  @ViewChild('nuevaTarea') nuevaTarea: any;

  constructor() {  }

  ngOnInit(): void {
  }


  agregarTarea(valor : string){
    this.nuevaTareaEvent.emit(valor);
    this.nuevaTarea.nativeElement.value = '' ; //limpiar el input
  }


}

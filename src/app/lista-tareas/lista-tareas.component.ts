import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: string[];

  constructor() { 
    this.tareas = [];
  }

  ngOnInit(): void {
  }

  agregarTarea(nuevaTarea: string){
    if(nuevaTarea != ""){
      this.tareas.unshift(nuevaTarea);
    }
  }

  eliminarTarea(tarea: string){
    let indice = this.tareas.indexOf(tarea);
    this.tareas.splice(indice,1);
  }

  tareaCompletada(completarTarea: HTMLParagraphElement){
    if(completarTarea.className == "completada"){
      completarTarea.className = '';
    }else{
      completarTarea.className =  "completada";
    }
  }
}

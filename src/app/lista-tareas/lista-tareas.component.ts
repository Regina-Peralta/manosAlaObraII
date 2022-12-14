import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

 // tareas: string[];

  constructor() { 
    //this.tareas = [];
  }
  tareas = ['Tarea 1', 'Tarea 2','Tarea 3','Tarea 4','Tarea 5','Tarea 6','Tarea 7','Tarea 8','Tarea 9','Tarea 10'];
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

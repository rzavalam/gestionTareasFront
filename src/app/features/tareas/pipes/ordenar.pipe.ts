import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../../../core/models/product/tarea';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(tareas: Tarea[], ordenar? : keyof Tarea | ''): Tarea[] {

    console.log ({tareas, ordenar});

    switch(ordenar){
      case 'nombre':
       return tareas.sort((a,b) => (a.nombre > b.nombre) ? 1 :-1);
     

      case 'estado':
       return tareas.sort((a,b) => (a.estado > b.estado) ? 1 :-1);
     

    
      case 'prioridad':
       return tareas.sort((a,b) => (a.prioridad > b.prioridad) ? 1 :-1);
     
      default :
      return tareas;
    
    }
  }
}

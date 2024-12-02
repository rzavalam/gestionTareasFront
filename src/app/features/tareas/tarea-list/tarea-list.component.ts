import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product/product';
import { Router } from '@angular/router';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { Tarea } from '../../../core/models/product/tarea';
 
@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent implements OnInit {
 
  tareas: Tarea[] = [];
  errorMessage: string | null = null;
  public ordenarParam ? : keyof Tarea ;
 
 
  constructor(private tareaService: TareaService, private router: Router) {
 
    this.ngOnInit()
  }
 
  ngOnInit() {


    this.tareaService.getTareas().subscribe({
      next: (data) => {
        this.tareas = data;
        this.tareas.forEach(tarea => {
          if (tarea.fechaFinal> new Date() && tarea.estado=='Asignada' )
          {
             tarea.colorEstado='red';
          }else {
            tarea.colorEstado='green';
          }

        })
        
      },
      error: (err) => {
        this.errorMessage = 'No se pudieron cargar los productos.';
        console.error('Error al obtener productos:', err);
      }
    });
    

  }
 
  viewDetails(id : string) {
    // Aquí podrías implementar la lógica para ver los detalles de un producto
    console.log('Ver detalles del producto con ID:', id);
  }
 
  redirect(){
    this.router.navigate(['/products/create']);
  }
 
  redirectUpdate(id: string){
    this.router.navigate(['/products/update/'+id+'/']);
  }
 
 
  deleteTarea(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      this.tareaService.deleteTarea(id).subscribe({
        next: () => {
          this.tareas = this.tareas.filter(tarea => tarea.idTarea !== id);
          console.log('Producto eliminado:', id);
        },
        error: (err) => {
          this.errorMessage = 'Error al eliminar el producto.';
          console.error('Error al eliminar producto:', err);
        }
      });
    }
  }
 
  cambiarOrden(value : keyof Tarea){
    this.ordenarParam = value;
  }
 
}
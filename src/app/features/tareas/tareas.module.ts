import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea/tarea.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TareaCreateComponent } from './tarea-create/tarea-create.component';



@NgModule({
  declarations: [
    TareaComponent,
    TareaListComponent,
    TareaCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ], 
  exports: [
    TareaComponent,
    TareaListComponent,
    TareaCreateComponent
  ]
})
export class TareasModule { }

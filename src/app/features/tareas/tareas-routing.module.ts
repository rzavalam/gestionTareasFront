import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaCreateComponent } from './tarea-create/tarea-create.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';

const routes : Routes=[
  {
    path : '',
    component : MenuComponent,
    children : [
      {path: 'agregar', component: TareaCreateComponent},
      {path: 'listar', component: TareaListComponent},
    ]
  },

  
];
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class TareasRoutingModule {
  
}

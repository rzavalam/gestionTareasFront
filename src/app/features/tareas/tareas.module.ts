import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea/tarea.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { TareaCreateComponent } from './tarea-create/tarea-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { TareasRoutingModule } from './tareas-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    TareaComponent,
    TareaListComponent,
    TareaCreateComponent
    ],
  imports: [
    TareasRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CalendarModule,
    DividerModule,
    CardModule,
    BrowserAnimationsModule,
    InputGroupModule,
    InputGroupAddonModule,
    DropdownModule
  ], 
  exports: [
    TareaComponent,
    TareaListComponent,
    TareaCreateComponent
    ]
})
export class TareasModule {
  
}

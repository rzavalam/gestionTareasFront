import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea/tarea.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TareaCreateComponent } from './tarea-create/tarea-create.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [
    TareaComponent,
    TareaListComponent,
    TareaCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    AutoCompleteModule,
    CalendarModule,
    AccordionModule
  ], 
  exports: [
    TareaComponent,
    TareaListComponent,
    TareaCreateComponent
  ]
})
export class TareasModule { }

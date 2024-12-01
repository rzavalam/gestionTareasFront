import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmacionComponent } from './modal-confirmacion/modal-confirmacion.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    ModalConfirmacionComponent
  ],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastModule
  ]
  
})
export class UtilsModule { }

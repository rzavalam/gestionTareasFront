import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule
    ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }

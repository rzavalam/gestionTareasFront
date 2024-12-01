import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  menuItems: MenuItem[] = [];

  ngOnInit() {
      this.menuItems = [
          {
            label: 'Gestión de Tareas',
            icon : 'pi pi-desktop',
            items:[
              { label: 'Registrar', icon: 'pi pi-plus' , routerLink : '/agregar'},
              { label: 'Buscar', icon: 'pi pi-search', routerLink : '/listar' }
            ]
          },
          {
            lable : '',
            icon: 'pi pi-cog',
            items:[
              { label: 'Cerrar Sesión', icon: 'pi pi-cog', routerLink : '/login' },
            ]

          }
      ];
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { UserComponent } from './shared/components/user/user.component';
import { TareaComponent } from './features/tareas/tarea/tarea.component';
import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';
import { AuthGuard } from './core/guardians/auth.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { TareaCreateComponent } from './features/tareas/tarea-create/tarea-create.component';
import { ModalConfirmacionComponent } from './utils/modal-confirmacion/modal-confirmacion.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { TareasModule } from './features/tareas/tareas.module';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "about", component: AboutComponent},
  {path: "user/:id", component: UserComponent},
  {path: "products", component: TareaComponent,
    canActivate: [AuthGuard],
    children:[
      {path: "list", component: TareaListComponent},
      {path: "create", component: TareaCreateComponent}
    ]
  },

  {path: "menu",
     component: MenuComponent},
  {
    path : 'menu/agregar',
    loadChildren : () => import('./features/tareas/tareas.module').then(m => m.TareasModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UserComponent } from './shared/components/user/user.component';
import { AboutComponent } from './shared/components/about/about.component';
import { TareasModule } from './features/tareas/tareas.module';
import { provideHttpClient } from '@angular/common/http';
import { AngularFireAuthModule,  } from '@angular/fire/compat/auth';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from './environments/environment';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TareasModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebasase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

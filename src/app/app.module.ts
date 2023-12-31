import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarUnauthenticatedComponent } from './shared/components/navbar-unauthenticated/navbar-unauthenticated.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarAuthenticatedComponent } from './shared/components/navbar-authenticated/navbar-authenticated.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { CadastroUsuarioComponent } from './pages/cadastro/cadastro.component';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { EncontroComponent } from './pages/encontro/encontro.component';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { TarefaComponent } from './pages/tarefa/tarefa.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarUnauthenticatedComponent,
    LoginComponent,
    NavbarAuthenticatedComponent,
    FooterComponent,
    ProfileComponent,
    QuemSomosComponent,
    CadastroUsuarioComponent,
    EncontroComponent,
    CronogramaComponent,
    EquipeComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    TableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: tokenInterceptor,
      multi: true
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

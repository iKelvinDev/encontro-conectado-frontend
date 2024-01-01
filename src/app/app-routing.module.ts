import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro/cadastro.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { EncontroComponent } from './pages/encontro/encontro.component';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { TarefaComponent } from './pages/tarefa/tarefa.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'encontro', component: EncontroComponent },
  { path: 'cronograma', component: CronogramaComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'tarefa', component: TarefaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

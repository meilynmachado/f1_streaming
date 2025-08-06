import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Dashboard } from './dashboard/dashboard';
import { Equipes } from './equipes/equipes';
import { Corridas } from './corridas/corridas';

export const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login,
    title: 'Login' // Título da página de login
  },
  {
    path: 'cadastro',
    component: Cadastro,
    title: 'Cadastro'
  },

  {
    path: 'dashboard',
    component: Dashboard,
    title: 'Dashboard' // Título da pagina de dashboard
  },

  {
    path: 'equipes',
    component: Equipes,
    title: 'Equipes' // Título da pagina de equipes
  },
  {
    path: 'corridas',
    component: Corridas,
    title: 'Corridas' // Título da pagina de corridas
  }
];
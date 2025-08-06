import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login,
    title: 'Login' // Adiciona título da página
  },
  {
    path: 'cadastro',
    component: Cadastro,
    title: 'Cadastro'
  },

  {
    path: 'dashboard',
    component: Dashboard,
    title: 'Dashboard' // Adiciona título da página
  }
];
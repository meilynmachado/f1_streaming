import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.scss']
})
export class Cadastro {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // e aq implementar a logica de cadastro e tal
    console.log('Cadastro:', {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    });

    // this.router.navigate(['/login']);
  }
}
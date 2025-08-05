import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-cadastro',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.scss']
})
export class Cadastro{
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
  
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // tem q implementar aq a logica de login
    console.log('Login attempt:', { email: this.email, senha: this.senha });
    
    // this.router.navigate(['/dashboard']);
  }
}
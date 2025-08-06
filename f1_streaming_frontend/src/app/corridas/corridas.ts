import { Component } from '@angular/core';
import { Sidebar } from '../components/sidebar/sidebar';
import { Header } from '../components/header/header';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-corridas',
  imports: [Sidebar, Header, CommonModule, HttpClientModule],
  templateUrl: './corridas.html',
  styleUrl: './corridas.scss',
  standalone: true})

  
export class Corridas {
  
  refreshData() {
  this.http.get<any[]>('https://api.openf1.org/v1/sessions').subscribe({
    next: (data) => {
      // Filtra sessões de corrida
      this.races = data.filter(race => race.session_name === 'Race');
    },
    error: (err) => console.error('Erro ao buscar corridas:', err)
  });}

  races: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
  this.http.get<any[]>('https://api.openf1.org/v1/sessions').subscribe({
    next: (data) => {
      this.races = data.filter(race => race.session_name === 'Race');
    },
    error: (err) => console.error('Erro ao buscar corridas:', err)
  });
  }
}
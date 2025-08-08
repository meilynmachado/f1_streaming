import { Component } from '@angular/core';
import { Sidebar } from '../components/sidebar/sidebar';
import { Header } from '../components/header/header';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-corridas',
  imports: [Sidebar, Header, CommonModule],
  templateUrl: './corridas.html',
  styleUrl: './corridas.scss',
  standalone: true})

  
export class Corridas {
  
  refreshData() {
   this.races = this.http.get<any[]>('https://api.openf1.org/v1/sessions').pipe(
      map((races: any[]) => races.filter((race: { session_type: string; }) => race.session_type === 'Race')) // 'Race' com R maiúsculo, conforme a API
    );
}

  races!: Observable<any[]> | null;

  constructor(private http: HttpClient) {}

ngOnInit() {
  this.races = this.http.get<any[]>('https://api.openf1.org/v1/sessions').pipe(
      map((races: any[]) => races.filter((race: { session_type: string; }) => race.session_type === 'Race')) // 'Race' com R maiúsculo, conforme a API
    );
}

  
}
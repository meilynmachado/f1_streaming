import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from "../components/header/header";
import { Sidebar } from "../components/sidebar/sidebar";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [CommonModule, Header, Sidebar],
  standalone: true})
  
export class Dashboard {
  showMenu = false;
  
  // Dados fictícios para o dashboard
  user = { name: 'Carlos Sainz' };
  
  seasonStats = {
    fastestLap: '1:12.345',
    averageLap: '1:15.678',
    lastWinner: 'Max Verstappen'
  }; 

  teamRanking = [
    { position: 1, name: 'McLaren', points: 460 },
    { position: 2, name: 'Ferrari', points: 222 },
    { position: 3, name: 'Mercedes', points: 210 }
  ];

  lastRaces = [
    { gp: 'Canadá', date: '09/06/2024', team: 'Mercedes', bestLap: '1:20.161' },
    { gp: 'Mônaco', date: '26/05/2024', team: 'Ferrari', bestLap: '1:13.556' }
  ];

  toggleMenu() {
    console.log('Menu toggled');
    this.showMenu = !this.showMenu;
  }


  refreshData() {

    this.seasonStats.fastestLap = '1:11.890';
    this.teamRanking[0].points = 480;
    this.lastRaces.unshift({
      gp: 'França', 
      date: '23/06/2024', 
      team: 'Red Bull', 
      bestLap: '1:12.402'
    });
  }

  getSeasonStats() {
  return [
    { title: 'Volta mais rápida', value: this.seasonStats.fastestLap },
    { title: 'Média de tempo por volta', value: this.seasonStats.averageLap },
    { title: 'Vencedor da última corrida', value: this.seasonStats.lastWinner }
  ];
}

getMedalType(position: number): string {
  switch(position) {
    case 1: return 'gold';
    case 2: return 'silver';
    case 3: return 'bronze';
    default: return '';
  }
}
}
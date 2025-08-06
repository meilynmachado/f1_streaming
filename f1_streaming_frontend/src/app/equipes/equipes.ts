import { Component } from '@angular/core';
import { Sidebar } from "../components/sidebar/sidebar";
import { Header } from "../components/header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipes',
  imports: [Sidebar, Header, CommonModule],
  templateUrl: './equipes.html',
  styleUrl: './equipes.scss',
  standalone: true
})
export class Equipes {
  refreshData() {
  this.teams = [
    { name: 'Red Bull Racing', country: 'Austria', yearFounded: 2005, numberOfDrivers: 2, action: '' },
    { name: 'McLaren', country: 'Reino Unido', yearFounded: 1963, numberOfDrivers: 2, action: '' },
    { name: 'Ferrari', country: 'Itália', yearFounded: 1929, numberOfDrivers: 2, action: '' },
    { name: 'Mercedes', country: 'Alemanha', yearFounded: 1954, numberOfDrivers: 2, action: '' },
    { name: 'Alpine', country: 'França', yearFounded: 1976, numberOfDrivers: 2, action: '' },
    { name: 'Aston Martin', country: 'Reino Unido', yearFounded: 1913, numberOfDrivers: 2, action: '' },
    { name: 'Haas F1 Team', country: 'Estados Unidos', yearFounded: 2016, numberOfDrivers: 2, action: '' },
    { name: 'Alfa Romeo Racing', country: 'Suíça', yearFounded: 1950, numberOfDrivers: 2, action: '' },
    { name: 'Williams Racing', country: 'Reino Unido', yearFounded: 1977, numberOfDrivers: 2, action: '' },
    { name: 'Scuderia AlphaTauri', country: 'Itália', yearFounded: 2006, numberOfDrivers: 2, action: '' }
  ];}

  showMenu = false;
  teams = [
    { name: 'Red Bull Racing', country: 'Austria', yearFounded: 2005, numberOfDrivers: 2, action: '' },
    { name: 'McLaren', country: 'Reino Unido', yearFounded: 1963, numberOfDrivers: 2, action: '' },
    { name: 'Ferrari', country: 'Itália', yearFounded: 1929, numberOfDrivers: 2, action: '' },
    { name: 'Mercedes', country: 'Alemanha', yearFounded: 1954, numberOfDrivers: 2, action: '' },
    { name: 'Alpine', country: 'França', yearFounded: 1976, numberOfDrivers: 2, action: '' },
    { name: 'Aston Martin', country: 'Reino Unido', yearFounded: 1913, numberOfDrivers: 2, action: '' },
    { name: 'Haas F1 Team', country: 'Estados Unidos', yearFounded: 2016, numberOfDrivers: 2, action: '' },
    { name: 'Alfa Romeo Racing', country: 'Suíça', yearFounded: 1950, numberOfDrivers: 2, action: '' },
    { name: 'Williams Racing', country: 'Reino Unido', yearFounded: 1977, numberOfDrivers: 2, action: '' },
    { name: 'Scuderia AlphaTauri', country: 'Itália', yearFounded: 2006, numberOfDrivers: 2, action: '' }
  ];

  toggleMenu() {
    console.log('Menu toggled');
    this.showMenu = !this.showMenu;
  }

}

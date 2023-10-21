import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Accueil',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: 'user-profile', title: 'Mon Profil',  icon:'ni-single-02 text-blue', class: '' },
    { path: 'candidatures', title: 'Mes Candidatures',  icon:'ni-send text-orange', class: '' },
    { path: 'entretien', title: 'Entretien',  icon:'ni-notification-70 text-yellow', class: '' },
   
];

@Component({
  selector: 'app-sidebarc',
  templateUrl: './sidebarc.component.html',
  styleUrls: ['./sidebarc.component.scss']
})
export class SidebarcComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/visiteur'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboarda', title: 'Accueil',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: 'profilea', title: 'Profil',  icon:'ni-single-02 text-blue', class: '' },
    { path: 'list-user', title: 'Liste des utilisateurs',  icon:'ni-send text-orange', class: '' },

   
];

@Component({
  selector: 'app-sidebara',
  templateUrl: './sidebara.component.html',
  styleUrls: ['./sidebara.component.scss']
})
export class SidebaraComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}

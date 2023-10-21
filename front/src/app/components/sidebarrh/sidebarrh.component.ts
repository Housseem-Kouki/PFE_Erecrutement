import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'dashboardRH', title: 'Accueil',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: 'profilerh', title: 'Mon Profile',  icon:'ni-single-02 text-blue', class: '' },
  { path: 'list-offre', title: 'Liste des Offres',  icon:'fas fa-briefcase text-red', class: '' },
  { path: 'list-candidatures', title: 'Liste des Candidatures',  icon:'fas fa-envelope text-yellow', class: '' },
  { path: 'list-entretiens', title: 'Liste des Entretiens',  icon:'far fa-clipboard text-orange', class: '' },
  { path: 'calendrier', title: 'Calendrier',  icon:'far fa-calendar-alt text-green', class: '' }
 
 
];

@Component({
  selector: 'app-sidebarrh',
  templateUrl: './sidebarrh.component.html',
  styleUrls: ['./sidebarrh.component.scss']
})





export class SidebarrhComponent implements OnInit {

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

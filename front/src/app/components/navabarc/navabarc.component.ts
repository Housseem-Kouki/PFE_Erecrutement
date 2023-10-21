import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebarc/sidebarc.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navabarc',
  templateUrl: './navabarc.component.html',
  styleUrls: ['./navabarc.component.scss']
})
export class NavabarcComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  currentuser :User;
  constructor(public us : UserService,location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
    //récupérer user current 
    let current_userr_id = parseInt(localStorage.getItem('id'));
      this.us.getUser(current_userr_id).subscribe(
      res  => {this.currentuser = res;},  
      error => {alert("Impossible d'afficher les users")}
       ); 
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'E-Recrutement';
  }
  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/visiteur'])
  }
}

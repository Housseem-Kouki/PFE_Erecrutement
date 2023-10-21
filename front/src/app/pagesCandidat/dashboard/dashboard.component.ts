import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';
import { Candidature } from 'src/app/models/candidature';
import { Offre } from 'src/app/models/offre';
import { User } from 'src/app/models/user';
import { CandidatService } from 'src/app/services/candidat.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OffreService } from 'src/app/services/offre.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lesoffres : Offre[];
  current_userr_id : number;
  currentuser : User;
  registerCandidatureData= {} as any ;
  lescandidats :Candidat[];
  candidatcurr:Candidat;


  lescandidatures : Candidature[];
  constructor(public ps:OffreService , public us: UserService ,public cs:CandidatService , public cans : CandidatureService) { 
     this.current_userr_id = parseInt(localStorage.getItem('id'));

  }

  ngOnInit(): void {
    //GET Tous Les Offres
    this.ps.getTousOffre().subscribe(
      data  => {this.lesoffres = data;},
      error => {alert("Impossible d'afficher")}
    );

    //GET Tous Les Candidature
    this.cans.getTousCandidature().subscribe(
      data  => {this.lescandidatures = data;},
      error => {alert("Impossible d'afficher")}
    );
  
   
  

    //GET User Connecté
    this.us.getUser(this.current_userr_id).subscribe(
      res  => {this.currentuser = res;
   },  
  error => {alert("Impossible d'afficher les users")}
  ); 

   //get candidat current
   this.cs.getTousCandidat().subscribe(
    res  => {this.lescandidats = res; console.log(res); 
      for(let candidat of this.lescandidats){
        if(candidat.user_id == this.current_userr_id){
          this.cs.getCandidat(candidat.id).subscribe(
            data=>{this.candidatcurr = data ;},
            err => {console.log(err)}
          );
        }

      }            
    },
error => {console.log(error)}
);

  }




  ajoutCandidature(offre_id){

  
        this.registerCandidatureData.status = 2 ;
        this.registerCandidatureData.candidat = '/api/candidats/'+this.candidatcurr.id ;
        this.registerCandidatureData.offre = '/api/offres/'+offre_id ;
        
        this.cans.ajoutCandidature(this.registerCandidatureData).subscribe(
          data => {alert("Candidature envoyé");location.reload();},
          err => {alert("candidature non envoyé")}
        );
    
    }
     
       
        
      

    
          
    
  
   
    
    
}



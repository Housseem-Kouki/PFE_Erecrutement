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
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.scss']
})
export class CandidaturesComponent implements OnInit {
  lescandidatures: Candidature[];
  lescandidats : Candidat[];
  lesoffres : Offre[];
  candidatcurr: Candidat;
  currentuser : User;
  current_userr_id : number;
  constructor(public us : UserService ,public cans : CandidatureService ,public cs : CandidatService ,public os : OffreService) { 
    this.current_userr_id = parseInt(localStorage.getItem('id'));
    this.cans.getTousCandidature().subscribe(
      data  => {this.lescandidatures = data;},
      error => {alert("Impossible d'afficher les candidature")}
    );

    this.cs.getTousCandidat().subscribe(
      res  => {this.lescandidats = res;
        for(let candidat of this.lescandidats){
          if(candidat.user_id == this.current_userr_id){
            this.cs.getCandidat(candidat.id).subscribe(
              data=>{this.candidatcurr = data ; console.log(this.candidatcurr)},
              err => {console.log(err)}
            );
          }
  
        }   
              
    },
  error => {alert("Impossible d'afficher les agents")}
  );


  this.os.getTousOffre().subscribe(
    data  => {this.lesoffres = data;},
    error => {alert("Impossible d'afficher")}
  );
  }

  ngOnInit(): void {
     //GET User Connecté
     this.us.getUser(this.current_userr_id).subscribe(
      res  => {this.currentuser = res;
   },  
  error => {alert("Impossible d'afficher les users")}
  ); 
  }

}

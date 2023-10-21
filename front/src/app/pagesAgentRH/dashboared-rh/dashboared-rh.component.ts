import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';
import { Candidature } from 'src/app/models/candidature';
import { Entretien } from 'src/app/models/entretien';
import { Offre } from 'src/app/models/offre';
import { User } from 'src/app/models/user';
import { CandidatService } from 'src/app/services/candidat.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { EntretienService } from 'src/app/services/entretien.service';
import { OffreService } from 'src/app/services/offre.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboared-rh',
  templateUrl: './dashboared-rh.component.html',
  styleUrls: ['./dashboared-rh.component.scss']
})
export class DashboaredRHComponent implements OnInit {
  lescandidats : Candidat[];
  nbrcandidats : number = 0;
  lesusers : User[];
  nbrhomme : number = 0;
  nbrfemme :number = 0;
  i : number = 0;

  lescandidatures : Candidature[];
  nbrcandidatures : number = 0;
  candidaccept : number = 0;
  candidtrefus : number = 0;
  candidcours : number = 0;
  percentacc :number;
  percentref :number;
  percentcours:number;
  nbrcand: number = 0;


  lesoffres : Offre[];
  nbroffres : number = 0;
  nbroffresaff : number = 0;
  nbroffresmas : number = 0;

  lesentretiens : Entretien[];
  nbrentretiens : number = 0;
  nbrenligne : number = 0;
  nbrenpres : number = 0;

 
  
  
  constructor(public us:UserService,public ens:EntretienService,public ofs:OffreService ,public cans : CandidatureService,public cs :CandidatService ) {

   }

  ngOnInit(): void {
    this.us.getTousUser().subscribe(
      data => {this.lesusers = data;}
        
    );
    
    this.cs.getTousCandidat().subscribe(
      data => {this.lescandidats = data;
      for (let candidat of this.lescandidats){
        this.nbrcandidats= this.nbrcandidats +1;  
          for(let user of this.lesusers)
          if ( (candidat.user_id == user.id)  && (user.civilite == "Homme")){
            this.nbrhomme = this.nbrhomme +1 ;
          }else if ( (candidat.user_id == user.id)  && (user.civilite == "Femme")){
            this.nbrfemme = this.nbrfemme +1 ;
          }
    
        
      }}
    );

   


    this.cans.getTousCandidature().subscribe(
      data => {this.lescandidatures = data;
      for (let candidature of this.lescandidatures){
        this.nbrcandidatures= this.nbrcandidatures +1;
        if(candidature.status == 1){
          this.candidaccept = this.candidaccept+1;
        }else if(candidature.status == 0){
          this.candidtrefus = this.candidtrefus +1
          
        }else{
          this.candidcours = this.candidcours +1;
        }
        this.percentacc = (this.candidaccept *  100) / this.nbrcandidatures;
        this.percentref = (this.candidtrefus *  100) / this.nbrcandidatures;
        this.percentcours = (this.candidcours  * 100) / this.nbrcandidatures;
      }}
    );
    

    this.ofs.getTousOffre().subscribe(
      data => {this.lesoffres = data;
      for (let offre of this.lesoffres){
        this.nbroffres= this.nbroffres +1;
        if(offre.statusoff == 1){
          this.nbroffresaff =this.nbroffresaff +1 ;
        }else if(offre.statusoff == 0){
          this.nbroffresmas =this.nbroffresmas +1 ;
        }
  
      }}
    );

    this.ens.getTousEntretien().subscribe(
      data => {this.lesentretiens = data;
      for (let entretien of this.lesentretiens){
        this.nbrentretiens= this.nbrentretiens +1;
        if(entretien.etat=="En Ligne"){
          this.nbrenligne = this.nbrenligne + 1;
        }else if(entretien.etat=="Présentiel"){
          this.nbrenpres = this.nbrenpres +1;

        }
      }}
    );

    
  }


  nbrcandidature(id){
    this.nbrcand = 0;
    for (let candidature of this.lescandidatures){
      if(candidature.offre_id == id){
        this.nbrcand = this.nbrcand + 1;

      }

    }

    
  }

  

}

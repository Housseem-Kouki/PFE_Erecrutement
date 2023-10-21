import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Entretien } from 'src/app/models/entretien';
import { EntretienService } from 'src/app/services/entretien.service';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {
  lesentretiens : Entretien[];
  entretien : Entretien;
  calendarEvents :Array<any>;
  ent : Entretien;
  calendarOptions : CalendarOptions;
  

 
  constructor(public ens :EntretienService ) { }

  ngOnInit(): void {
   
    this.ens.getTousEntretien().subscribe(
      data  => {this.lesentretiens = data;
      for(let entretien of this.lesentretiens){
        this.ens.getEntretien(entretien.id).subscribe(
          data  => {this.ent = data;
            this.calendarOptions = {
              initialView: 'dayGridMonth',
              dateClick: this.handleDateClick.bind(this), // bind is important!
              events: [
                { title: entretien.etat, date: entretien.dateentretien},
              ]
            };
          
            console.log( this.calendarOptions);}
        );
       
       
      }},
      error => {alert("Impossible d'afficher")}
    );

  

    
    
  }



  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

}

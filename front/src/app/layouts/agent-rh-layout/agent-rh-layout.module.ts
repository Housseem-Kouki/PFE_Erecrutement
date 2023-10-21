import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RHLayoutRoutes } from './agent-rh-layout.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { DashboaredRHComponent } from 'src/app/pagesAgentRH/dashboared-rh/dashboared-rh.component';
import { ProfilerhComponent } from 'src/app/pagesAgentRH/profilerh/profilerh.component';
import { ListOffreComponent } from 'src/app/pagesAgentRH/list-offre/list-offre.component';
import { NgbdModalComponent, NgbdModalContent } from 'src/app/pagesAgentRH/modaloff/modaloff.component';
import { ListCandidaturesComponent } from 'src/app/pagesAgentRH/list-candidatures/list-candidatures.component';
import { ListEntretiensComponent } from 'src/app/pagesAgentRH/list-entretiens/list-entretiens.component';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { CalendrierComponent } from 'src/app/pagesAgentRH/calendrier/calendrier.component';
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);





@NgModule({
  declarations: [
    DashboaredRHComponent,
    ProfilerhComponent,
    ListOffreComponent,
    ListCandidaturesComponent,
    NgbdModalComponent,
    NgbdModalContent,
    ListEntretiensComponent,
    CalendrierComponent
    
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RHLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    FullCalendarModule
  ],
  entryComponents: [NgbdModalContent],
  exports:[ ListOffreComponent ]
})
export class AgentRhLayoutModule { }

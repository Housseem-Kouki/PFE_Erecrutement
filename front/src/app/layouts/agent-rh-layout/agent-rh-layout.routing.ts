import { Routes } from "@angular/router";
import { CalendrierComponent } from "src/app/pagesAgentRH/calendrier/calendrier.component";
import { DashboaredRHComponent } from "src/app/pagesAgentRH/dashboared-rh/dashboared-rh.component";
import { ListCandidaturesComponent } from "src/app/pagesAgentRH/list-candidatures/list-candidatures.component";
import { ListEntretiensComponent } from "src/app/pagesAgentRH/list-entretiens/list-entretiens.component";
import { ListOffreComponent } from "src/app/pagesAgentRH/list-offre/list-offre.component";
import { ProfilerhComponent } from "src/app/pagesAgentRH/profilerh/profilerh.component";



export const RHLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboardRH'},
    { path: 'dashboardRH',      component: DashboaredRHComponent },
    { path: 'profilerh',   component: ProfilerhComponent },
    { path: 'list-offre',         component: ListOffreComponent },
    { path: 'list-candidatures',         component: ListCandidaturesComponent },
    { path: 'list-entretiens',         component: ListEntretiensComponent },
    { path: 'calendrier',         component: CalendrierComponent }
   
];
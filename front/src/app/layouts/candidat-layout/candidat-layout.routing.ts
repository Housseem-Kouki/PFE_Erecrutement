import { Routes } from '@angular/router';
import { CandidaturesComponent } from 'src/app/pagesCandidat/candidatures/candidatures.component';
import { DashboardComponent } from 'src/app/pagesCandidat/dashboard/dashboard.component';
import { EntretienComponent } from 'src/app/pagesCandidat/entretien/entretien.component';
import { UserProfileComponent } from 'src/app/pagesCandidat/user-profile/user-profile.component';


export const CandidatLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard'},
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'candidatures',          component: CandidaturesComponent },
    { path: 'entretien',           component: EntretienComponent }
];

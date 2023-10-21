import { Routes } from "@angular/router";
import { DashboardaComponent } from "src/app/pagesAdmin/dashboarda/dashboarda.component";
import { ListUserComponent } from "src/app/pagesAdmin/list-user/list-user.component";
import { ProfileaComponent } from "src/app/pagesAdmin/profilea/profilea.component";

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboarda'},
    { path: 'dashboarda',      component: DashboardaComponent },
    { path: 'profilea',   component: ProfileaComponent },
    { path: 'list-user',         component: ListUserComponent },
   
];
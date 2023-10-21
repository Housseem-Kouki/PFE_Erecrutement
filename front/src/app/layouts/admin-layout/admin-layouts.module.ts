import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardaComponent } from 'src/app/pagesAdmin/dashboarda/dashboarda.component';
import { ProfileaComponent } from 'src/app/pagesAdmin/profilea/profilea.component';
import { ListUserComponent } from 'src/app/pagesAdmin/list-user/list-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';



@NgModule({
  declarations: [
    DashboardaComponent,
    ProfileaComponent,
    ListUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ]
})
export class AdminLayoutsModule { }

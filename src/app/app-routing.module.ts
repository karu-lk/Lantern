import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactCoordinatorComponent } from './contact-coordinator/contact-coordinator.component';
import { DanaRosterComponent } from './dana-roster/dana-roster.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact-coordinator', component: ContactCoordinatorComponent },
  { path: 'dana-roster', component: DanaRosterComponent },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

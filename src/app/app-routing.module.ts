import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './screens/login/login.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { RegisterComponent } from './screens/register/register.component';
import { TripsComponent } from './screens/trips/trips.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: MenubarComponent },
  { path: 'trips', component: TripsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

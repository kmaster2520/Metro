import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenubarComponent } from './menubar/menubar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'navbar', component: MenubarComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

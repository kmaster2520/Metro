
// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// basic app 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// material components
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { MenubarComponent } from './components/menubar/menubar.component';

// screens
import { LoginComponent } from './screens/login/login.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { RegisterComponent } from './screens/register/register.component';

// services
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { TripsComponent } from './screens/trips/trips.component';
import { HomeComponent } from './screens/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    TripsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

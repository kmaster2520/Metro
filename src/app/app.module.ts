
// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// basic app 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { MenubarComponent } from './components/menubar/menubar.component';

// material components
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatInput, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// screens
import { LoginComponent } from './screens/login/login.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { RegisterComponent } from './screens/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

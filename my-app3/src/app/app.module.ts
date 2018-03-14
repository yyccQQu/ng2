import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
//import { HeroesComponent }      from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    //FormsModule,
    AppRoutingModule

  ],
  imports: [
    BrowserModule,
    DashboardComponent
    // HeroesComponent,
    // HeroDetailComponent,
    // MessagesComponent,
    // HeroSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

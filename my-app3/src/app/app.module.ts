import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
//import { HeroesComponent }      from './heroes/heroes.component';

//Component在declarations中的，Module在import中的
@NgModule({
  declarations: [
    AppComponent,
    //FormsModule,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // HeroesComponent,
    // HeroDetailComponent,
    // MessagesComponent,
    // HeroSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

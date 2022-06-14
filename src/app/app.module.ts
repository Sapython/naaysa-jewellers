import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { HeaderComponent } from './client/header/header.component';
import { ClientRoutingModule } from './client/client-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

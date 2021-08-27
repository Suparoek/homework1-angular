import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { CategorymenuComponent } from './categorymenu/categorymenu.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbannerComponent,
    CategorymenuComponent,
    SearchbarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule, NgbAlertModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

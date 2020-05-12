import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'primeng/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TopMenuComponent } from './layout/top-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListeCustomersComponent } from './liste-customers/liste-customers.component';
import { FicheCustomerComponent } from './fiche-customer/fiche-customer.component';
import { UserManagerService } from './services/user-manager.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TopMenuComponent,
    SidebarComponent,
    ListeCustomersComponent,
    FicheCustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SidebarModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [UserManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

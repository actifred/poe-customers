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
import { LigneListeCustomersComponent } from './ligne-liste-customers/ligne-liste-customers.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TopMenuComponent,
    SidebarComponent,
    ListeCustomersComponent,
    FicheCustomerComponent,
    LigneListeCustomersComponent,
    DetailCustomerComponent
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

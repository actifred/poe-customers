

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'primeng/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TopMenuComponent } from './layout/top-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListUserPageComponent } from './list-user-page/list-user-page.component';
import { DetailUserPageComponent } from './detail-user-page/detail-user-page.component';
import { UserCardComponent } from './user-card/user-card.component';

import { UserServicesService } from './user-services.service';

import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TopMenuComponent,
    SidebarComponent,
    ListUserPageComponent,
    DetailUserPageComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    FontAwesomeModule,
    AppRoutingModule,
    ScrollingModule,
    TableModule
  ],
  providers: [UserServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

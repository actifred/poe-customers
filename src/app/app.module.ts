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

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TopMenuComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

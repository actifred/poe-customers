import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'primeng/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TopMenuComponent } from './layout/top-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserServiceService } from './service/user-service.service';
import { UsersComponent } from './users/users.component';
import { UnserDetailsComponent } from './unser-details/unser-details.component';
import { AddUserComponent } from './add-user/add-user.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TopMenuComponent,
    SidebarComponent,
    UsersComponent,
    UnserDetailsComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

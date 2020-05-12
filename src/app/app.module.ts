import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TopMenuComponent } from './layout/top-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormAddComponent } from './form-add/form-add.component';
import { dbAccesServices } from './services/dbAcces.services';
import { FormsModule } from '@angular/forms';
import { FormUpdateComponent } from './form-update/form-update.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TopMenuComponent,
    SidebarComponent,
    UserListComponent,
    UserDetailsComponent,
    FormAddComponent,
    FormUpdateComponent,
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,  
    FormsModule,
  ],
  providers: [dbAccesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

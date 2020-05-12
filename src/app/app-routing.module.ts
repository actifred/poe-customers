import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  { 
    path: "old",
    component: WelcomePageComponent
  },
  { 
    path: "",
    component: UserListComponent
  },
{ 
  path: "detail/:ID",
  component: UserDetailsComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

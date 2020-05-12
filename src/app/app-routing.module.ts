import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UsersComponent } from './users/users.component';
import { UnserDetailsComponent } from './unser-details/unser-details.component';


const routes: Routes = [
  { 
    path: "",
    component: WelcomePageComponent
  },
  { 
    path: "users",
    component: UsersComponent
  },
  { 
    path: "users/:id",
    component: UnserDetailsComponent
  }
  // ajouter des composants et des routes pour voir la liste des users, le detail d'un user, 
  // et les formulaires de modification ou d'ajout
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

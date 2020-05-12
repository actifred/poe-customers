import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { 
    path: "",
    component: WelcomePageComponent
  },
  { 
    path: 'users',
    component: UserListComponent
  },
  { 
    path: 'detail/:userName',
    component: UserDetailComponent
  },
  
  //ajouter des composants (ng generate) et des routes pour voir la liste des users, 
  //le detail d'un user et les formulaires de modifications ou d'ajout
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FormUpdateComponent } from './form-update/form-update.component';


const routes: Routes = [
  { 
    path: "",
    component: WelcomePageComponent
  },
  { 
    path: "listUser",
    component: UserListComponent
  },
{ 
  path: "detail/:ID",
  component: UserDetailsComponent
},
{
  path:"addForm",
  component:FormAddComponent
},
{
  path:"updateForm/:ID",
  component:FormUpdateComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, Params } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ListUserPageComponent } from './list-user-page/list-user-page.component';
import { DetailUserPageComponent } from './detail-user-page/detail-user-page.component';


const routes: Routes = [
  { 
    path: "",
    component: WelcomePageComponent
  },
  { 
    path: "listUser",
    component: ListUserPageComponent
  },
  { 
    path: "detailUser/:paramId",
    component: DetailUserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

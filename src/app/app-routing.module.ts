import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ListeCustomersComponent } from './liste-customers/liste-customers.component';
import { FicheCustomerComponent } from './fiche-customer/fiche-customer.component';


const routes: Routes = [
  { 
    path: "",
    component: WelcomePageComponent
  },
  { 
    path: "liste",
    component: ListeCustomersComponent
  },
  { 
    path: "ajouter",
    component: FicheCustomerComponent
  }


  // créer composant avec ng generate puis créer routes pr voir la liste des users 
  // et les formulaires de modif ou d'ajouts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {InscriptionComponent} from "./component/inscription/inscription.component";
import {AcueilComponent} from "./component/acueil/acueil.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'creerCompte', component: InscriptionComponent},
  {path: 'accueil', component: AcueilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

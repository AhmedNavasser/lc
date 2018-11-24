import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaleCardComponent } from './lale-card/lale-card.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'laleCard' , component: LaleCardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

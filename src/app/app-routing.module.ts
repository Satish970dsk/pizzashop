import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewpizzaComponent } from './viewpizza/viewpizza.component';
import { OrderComponent } from './order/order.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { loginGuard } from './login.guard';
import { AddtocartComponent } from './addtocart/addtocart.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'view',component:ViewpizzaComponent,canActivate:[loginGuard]
  },
  {
    path:'order',component:OrderComponent,canActivate:[loginGuard]
  },
  {
    path:'cart',component:AddtocartComponent,canActivate:[loginGuard]
  },
  
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

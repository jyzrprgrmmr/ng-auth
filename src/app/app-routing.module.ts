import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './client/about/about.component';
import { HomeComponent } from './client/home/home.component';
import { ShopComponent } from './client/shop/shop.component';

const routes: Routes = [

  //Client Routes //
  {path:'',component:HomeComponent, pathMatch: 'full' },
  {path: 'about' , component: AboutComponent},
  {path:'login',component: AuthComponent},
  {path:'shop',component: ShopComponent},


  //Admin Routes//

  {path: 'dashboard', component:DashboardComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ProductgroupListComponent } from './features/productgroup/components/productgroup-list/productgroup-list.component';
import { AboutComponent } from './core/components/about/about/about.component';
import { LoginComponent } from './core/components/authentication/login/login.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title:'Home' },
  {path: 'productgroups', component: ProductgroupListComponent, title:'Product groups'},   
  {path: 'products', loadChildren: () => import('./features/product/product.module').then(x=>x.ProductModule), title:'Products' },
  {path: 'about', component: AboutComponent, title:'About' },
  {path: 'login', component: LoginComponent, title:'Login' },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent, title: 'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';
import { BaseModule } from '../base/base-module.module';
import { SubModule } from '../sub/sub.module';
import { ChatComponent } from './chat/chat.component';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Observable, delay, of } from 'rxjs';




export const dataResolver: ResolveFn<Observable<string>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{

  return of("Delayed data").pipe(delay(10000));
};


export const routes:Routes = [
  {path:'home', component:HomeComponent, resolve:{data:dataResolver}},
  {path:'chat', component: ChatComponent},
  {path:'support', component:SupportComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  declarations: [
    NotFoundComponent,
    SupportComponent,
    HomeComponent,
    ChatComponent,
    MainComponent
  ],
  exports:[MainComponent],
  imports: [
    CommonModule,
    BaseModule,
    SubModule,
    RouterModule.forRoot(routes)
  ]
})
export class CoreModule { }

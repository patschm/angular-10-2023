import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';
import { BaseModule } from '../base/base-module.module';
import { SubModule } from '../sub/sub.module';
import { ChatComponent } from './chat/chat.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes:Routes = [
  {path:'home', component:HomeComponent},
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { Main1Component } from './core/components/main1/main1.component';
import { Main2Component } from './core/components/main2/main2.component';
import { Main3Component } from './core/components/main3/main3.component';
import { SupportComponent } from './shared/components/support/support.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'/main1',
    pathMatch:'full'
  },
  {
    path:'main1',
    component:Main1Component
  },
  {
    path:'main2/:nr',
    component:Main2Component
  },
  {
    path:'main3',
    component:Main3Component
  },
  {
    path:'sub',
    loadChildren:()=>import('./features/sub/sub.module').then(m=>m.SubModule)
  },
  {
    path:'support',
    component:SupportComponent
  },
  {
    path:'**',
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,   
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

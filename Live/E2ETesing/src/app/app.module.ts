import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes:Routes = [
  { path: '', redirectTo:'/overview', pathMatch:'full'},
  { path: 'overview', component:ProductListComponent, title:'Products' },
  { path: 'detail/:id', component:ProductDetailComponent, title:'Details' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ProductModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsByCategoryListComponent } from './products-by-category-list/products-by-category-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

const routes: Routes = [
  {
    path: '', component: ProductsListComponent
  },
  {
    path: ':catid', component: ProductsByCategoryListComponent
  },
  {
    path: ':catid/:prodid', component: ProductsDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ProductsRoutingModule { }

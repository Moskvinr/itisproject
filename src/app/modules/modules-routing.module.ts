import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: 'account', loadChildren: './account/account.module#AccountModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ModulesRoutingModule { }

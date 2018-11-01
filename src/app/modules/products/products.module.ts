import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsByCategoryListComponent } from './products-by-category-list/products-by-category-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsListComponent, ProductsByCategoryListComponent, ProductsDetailsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }

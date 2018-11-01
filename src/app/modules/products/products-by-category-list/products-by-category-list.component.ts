import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { Product } from '../product-model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products-by-category-list',
  templateUrl: './products-by-category-list.component.html',
  styleUrls: ['./products-by-category-list.component.css']
})
export class ProductsByCategoryListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const catId = params['catid'];
      this.products = this.productsService.getProductsByCatId(catId);
    });
  }

}

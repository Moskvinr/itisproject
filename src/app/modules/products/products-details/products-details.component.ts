import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product-model';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  product: Product;
  constructor(private productsService: ProductsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      const prodId = params['prodid'];
      this.productsService.getProduct(prodId).subscribe(prod =>
        this.product = prod);
    });
  }
}

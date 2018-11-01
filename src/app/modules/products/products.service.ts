import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, Specification } from './product-model';
import { Image } from '../categories/category-model';
import { map } from 'rxjs/operators';

// tslint:disable-next-line:max-line-length
const laptopProductImage = ['https://c.s-microsoft.com/en-us/CMSImages/Windows10_ViewAll__hero_1920.jpg?version=9827798b-32be-675f-4a86-ae7dca0d2e19',
  'https://images-na.ssl-images-amazon.com/images/I/61EJz6KKOKL._SX425_.jpg'];
const smartphoneImage = 'https://i.ytimg.com/vi/o5CI55n6rxs/maxresdefault.jpg';

const PRODUCTS: Product[] = [
  new Product(1, 1, 'dell', 'best', [new Image(laptopProductImage[0]),
  new Image(laptopProductImage[1])], [new Specification('OS', 'Windows'), new Specification('processor', 'Intel Core I9 Kaby Lake')]),
  new Product(2, 1, 'acer', 'better', [new Image(laptopProductImage[0]),
  new Image(laptopProductImage[1])], [new Specification('OS', 'Windows'), new Specification('processor', 'Intel Core I9 Kaby Lake')]),
  new Product(3, 1, 'macBook', 'worst', [new Image(laptopProductImage[0]),
  new Image(laptopProductImage[1])], [new Specification('OS', 'MacOs'), new Specification('processor', 'Pentium 2000th')]),

  new Product(4, 2, 'Pixel 3', 'best', [new Image(smartphoneImage)],
    [new Specification('OS', 'Android'), new Specification('processor', 'Qualcomm 835')]),
  new Product(5, 2, 'Samsung Galaxy s10', 'good', [new Image(smartphoneImage)],
    [new Specification('OS', 'Android'), new Specification('processor', 'Qualcomm 835')]),
  new Product(6, 2, 'iPhone X', 'worst', [new Image(smartphoneImage)],
    [new Specification('OS', 'IOS'), new Specification('processor', 'idk')])
];

@Injectable()
export class ProductsService {

  private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(PRODUCTS);

  getProducts(): Observable<Product[]> {
    return this.products;
  }

  getProductsByCatId(id: number | string): Observable<Product[]> {
    return this.getProducts()
      .pipe(
        map(products => products.filter(prod => prod.catId === +id))
      );
  }

  getProduct(id: number | string): Observable<Product> {
    return this.getProducts()
    .pipe(
      map(products => products.find(prod => prod.id === +id))
    );
  }

  constructor() { }
}

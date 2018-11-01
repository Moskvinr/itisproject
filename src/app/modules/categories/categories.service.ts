import { Injectable } from '@angular/core';
import { Category } from './category-model';
import { Image } from './category-model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// tslint:disable-next-line:max-line-length
const laptopCategoryImage = 'https://www.lenovo.com/medias/lenovo-laptop-legion-y520-15-front.png?context=bWFzdGVyfGltYWdlc3wyNzI1M3xpbWFnZS9wbmd8aW1hZ2VzL2g4OC9oYTAvOTM1OTcwMTYwNjQzMC5wbmd8MjNhNjMwZjhhNWJmOGYzNzhjYjgwMDViMTQxOWM1ZjJiNjdjZGQ0OWUzOWEzMThkNzg3ZWE0MTc1NTdjNTY2Yw';
const smartphoneImage = 'https://i.ytimg.com/vi/o5CI55n6rxs/maxresdefault.jpg';

const CATEGORIES: Category[] = [
  new Category(1, 'laptops', 'laptopsDescription', [new Image(laptopCategoryImage)], null),
  new Category(2, 'smartphones', 'smartphoneDescr', [new Image(smartphoneImage)], null)
];

@Injectable()
export class CategoriesService {

  private categories: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(CATEGORIES);

  getCategories(): Observable<Category[]> {
    return this.categories;
  }

  getCategory(id: number | string) {
    return this.getCategories().pipe(
      map(categories => categories.find(category => category.id === +id))
    );
  }

  constructor() { }
}

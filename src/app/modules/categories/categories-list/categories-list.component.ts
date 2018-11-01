import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Observable } from 'rxjs';
import { Category } from '../category-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor(private categoryService: CategoriesService, private route: ActivatedRoute) { }

  categories: Observable<Category[]>;

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { items } from '../item/items';
import { categories } from '../category/categories';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  constructor() {}

  items = items;
  categories = categories;
  activeCategory = 1;

  addItemsToCategories() {
    this.categories.forEach((cat) => {
      cat.items = items[cat.id];
    });
  }

  clearQuantities() {
    this.categories.forEach((cat) => {
      cat.items.forEach((item) => {
        item.quantity = 0;
      });
    });
  }

  ngOnInit() {
    this.addItemsToCategories();
  }
}

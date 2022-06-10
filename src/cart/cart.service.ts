import { Injectable } from '@angular/core';
import { Item } from '../item/items';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items = {};

  updateItemQuantity(item) {
    if (item.quantity > 0) {
      this.items[item.id] = item;
    } else {
      delete this.items[item.id];
    }
  }

  calculateTotal() {
    let total = 0;
    Object.keys(this.items).forEach((k) => {
      let item = this.items[k];
      total += item.price * item.quantity;
    });
    return total;
  }
}

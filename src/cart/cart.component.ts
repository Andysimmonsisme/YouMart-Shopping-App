import { Component, OnInit } from '@angular/core';
import { BagComponent } from '../bag/bag.component';
import { CartService } from './cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  total: number = 0;
  items;
  bags: Array<BagComponent>;

  showCart() {
    this.total = this.cartService.calculateTotal();
    this.items = this.cartService.getItems();
    console.log(this.items);
    document.getElementById('cart-modal-bg').classList.remove('hide');
    document.getElementById('cart-modal').classList.remove('hide');
  }

  closeCart() {
    document.getElementById('cart-modal-bg').classList.add('hide');
    document.getElementById('cart-modal').classList.add('hide');
  }

  checkout() {
    if (this.cartService.calculateTotal() > 0) {
      alert("This one's on us! Thanks for shopping!");
      this.clearCart();
    } else {
      alert('Your cart is empty!');
    }
  }

  clearCart() {
    if (this.cartService.calculateTotal() > 0) {
      this.cartService.clearCart();
      this.closeCart();
    } else {
      alert('Your cart is empty!');
    }
  }

  ngOnInit() {
    this.closeCart();
  }
}

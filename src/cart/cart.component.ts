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
  bags: Array<BagComponent>;

  showCart() {
    this.total = this.cartService.calculateTotal();
  }

  ngOnInit() {}
}

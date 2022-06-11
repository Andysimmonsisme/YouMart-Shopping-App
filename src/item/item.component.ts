import { Component, OnInit, Input, Output } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  constructor(private cartService: CartService) {}

  @Input() id: number;
  @Input() name: string;
  @Input() price: number;
  @Output() quantity: number = 0;

  increaseQuantity() {
    if (this.quantity < 9) {
      this.quantity++;
      this.cartService.updateItemQuantity(this);
    }
  }

  decreaseQuantity() {
    if (this.quantity > 0) this.quantity--;
  }

  isNumber(evt) {
    evt.preventDefault();
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    this.quantity = charCode - 48; //char codes 48-56 represent numbers 0-9
    this.cartService.updateItemQuantity(this);
  }

  ngOnInit() {
    this.cartService.cartCleared.subscribe((cleared) => {
      if (cleared) this.quantity = 0;
    });
  }
}

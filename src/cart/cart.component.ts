import { Component, OnInit } from '@angular/core';
import { BagComponent } from '../bag/bag.component';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor() {}

  total: number = 0;
  bags: Array<BagComponent>;

  ngOnInit() {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  @Input() id: number;
  @Input() name: string;
  @Input() items;

  ngOnInit() {}
}

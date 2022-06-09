import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BagComponent } from '../bag/bag.component';
import { CartComponent } from '../cart/cart.component';
import { CategoryComponent } from '../category/category.component';
import { HeaderComponent } from '../header/header.component';
import { ItemComponent } from '../item/item.component';
import { ItemListComponent } from '../item-list/item-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    BagComponent,
    CartComponent,
    CategoryComponent,
    HeaderComponent,
    ItemComponent,
    ItemListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

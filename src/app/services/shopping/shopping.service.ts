import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingItem } from '../../store/models/shopping-item.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private SHOPPING_URL = "/api/shopping"

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return this.http.get<Array<ShoppingItem>>(this.SHOPPING_URL).pipe(
      delay(Math.floor(Math.random() * Math.floor(2000)))
    )
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, shoppingItem).pipe(
      delay(Math.floor(Math.random() * Math.floor(2000)))
    )
  }

  deleteShoppingItem(itemId: string) {
    return this.http.delete(`${this.SHOPPING_URL}/${itemId}`);
  }
}

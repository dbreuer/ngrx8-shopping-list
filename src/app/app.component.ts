import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from './store/actions/shopping.actions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  shoppingItems: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newShoppingItem: ShoppingItem = { id: null, name: '' }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);

    this.store.dispatch(LoadShoppingAction());
  }

  addItem() {
    this.newShoppingItem.id = Math.floor(Math.random() * Math.floor(100000));

    this.store.dispatch(AddItemAction({ item: this.newShoppingItem }));

    this.newShoppingItem = { id: null, name: '' };
  }

  deleteItem(id: number) {
    this.store.dispatch(DeleteItemAction({ id }));
  }
}

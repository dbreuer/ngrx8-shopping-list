import * as ShoppingAction from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

import { createReducer, on } from '@ngrx/store';

export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean,
  error: Error;
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
};

export const ShoppingReducer = createReducer(
  initialState,
  on(ShoppingAction.LoadShoppingAction, state => ({
    ...state,
    loading: true
  })),
  on(ShoppingAction.LoadShoppingSuccessAction, (state, { list }) => ({
    ...state,
    list,
    loading: false
  })),
  on(ShoppingAction.LoadShoppingFailureAction, (state, { error }) => ({
    ...state,
    error
  })),
  on(ShoppingAction.AddItemAction, state => ({
    ...state,
    loading: true
  })),
  on(ShoppingAction.AddItemSuccessAction, (state, { item }) => ({
    ...state,
    list: [...state.list, item],
    loading: false
  })),
  on(ShoppingAction.AddItemFailureAction, (state, { error }) => ({
    ...state,
    error
  })),
  on(ShoppingAction.DeleteItemAction, state => ({
    ...state,
    loading: true
  })),
  on(ShoppingAction.DeleteItemSuccessAction, (state, { id }) => ({
    ...state,
    list: state.list.filter(item => item.id !== id),
    loading: false
  })),
  on(ShoppingAction.DeleteItemFailureAction, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);


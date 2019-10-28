import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export const LoadShoppingAction = createAction(
  '[SHOPPING] Load Shopping'
);

export const LoadShoppingSuccessAction = createAction(
  '[SHOPPING] Load Shopping Success',
  props<{ list: ShoppingItem[] }>()
);

export const LoadShoppingFailureAction = createAction(
  '[SHOPPING] Load Shopping Failure',
  props<{ error: Error }>()
);

export const AddItemAction = createAction(
  '[SHOPPING] Add Item',
  props<{ item: ShoppingItem }>()
);

export const AddItemSuccessAction = createAction(
  '[SHOPPING] Add Item Success',
  props<{ item: ShoppingItem }>()
);

export const AddItemFailureAction = createAction(
  '[SHOPPING] Add Item Failure',
  props<{ error: Error }>()
);

export const DeleteItemAction = createAction(
  '[SHOPPING] Delete Item',
  props<{ id: number }>()
);

export const DeleteItemSuccessAction = createAction(
  '[SHOPPING] Delete Item Success',
  props<{ id: number }>()
);

export const DeleteItemFailureAction = createAction(
  '[SHOPPING] Delete Item Failure',
  props<{ error: Error }>()
);

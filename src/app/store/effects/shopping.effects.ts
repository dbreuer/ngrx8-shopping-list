import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ShoppingActions from '../actions/shopping.actions';
import { ShoppingService } from '../../services/shopping/shopping.service';



@Injectable()
export class ShoppingEffects {

  loadShopping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingActions.LoadShoppingAction),
      mergeMap(() =>
        this.shoppingService.getShoppingItems().pipe(
          map(list =>
            ShoppingActions.LoadShoppingSuccessAction({ list })
          ),
          catchError(error =>
            of(ShoppingActions.LoadShoppingFailureAction(error))
          )
        )
      ),
    ));

  addShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingActions.AddItemAction),
      mergeMap(
        (item: any) => this.shoppingService.addShoppingItem(item)
          .pipe(
            map(() => ShoppingActions.AddItemSuccessAction(item)),
            catchError(error => of(ShoppingActions.AddItemFailureAction(error)))
          )
      )
    )
  );

  deleteShoppingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingActions.DeleteItemAction),
      mergeMap(
        (id: any) => this.shoppingService.deleteShoppingItem(id)
          .pipe(
            map(() => ShoppingActions.DeleteItemSuccessAction(id)),
            catchError(error => of(ShoppingActions.AddItemFailureAction(error)))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) { }
}
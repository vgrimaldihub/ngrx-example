import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Coin} from '@models/vo/coin';
import {CoinService} from '@services/coin.service';
import {
  createCall, createCatchError, createResponse,
  deleteCall, deleteCatchError, deleteResponse,
  editCall, editCatchError, editResponse,
  searchCall, searchCatchError, searchResponse,
  selectCall, selectCatchError, selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';

@Injectable()
export class CoinStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: CoinService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Coin>(this.service),
    searchResponse<Coin>(actions, {dispatchResponse: false}),
    searchCatchError<Coin>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Coin>(this.service),
    deleteResponse<Coin>(actions, Coin, {dispatchResponse: false}),
    deleteCatchError<Coin>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Coin>(this.service),
    createResponse<Coin>(actions, {dispatchResponse: false}),
    createCatchError<Coin>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Coin>(this.service),
    editResponse<Coin>(actions, {dispatchResponse: false}),
    editCatchError<Coin>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Coin>(this.service),
    selectResponse<Coin>(actions, {dispatchResponse: false}),
    selectCatchError<Coin>(actions),
    repeat()
  ));

}

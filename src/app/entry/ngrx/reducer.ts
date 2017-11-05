import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as appAction from './actions';
import { ApplicationModel } from "./../../repository/model";

export interface State {
    appState: ApplicationModel
};

const initialState: State = {
  appState: new ApplicationModel(1,'this is name')
};

export function reducer(state = initialState, action: appAction.Actions): State {
    switch (action.type) {
        case appAction.ActionTypes.INITIALIZE: {
            return state;
        }
        case appAction.ActionTypes.LOAD_APPMODEL: {
            //if (state.appState.hasLoaded) {
            //    return state;
            //}

            //return Object.assign({}, state, {
            //    appState: Object.assign({}, action.payload, { hasLoaded: true })
            //});
        }
        case appAction.ActionTypes.CHANGE_SCOPE: {
            //let newState = Object.assign({}, state, {
            //    appState: Object.assign({}, {
            //        hasLoaded: true,
            //        scope: action.payload.scope,
            //        name: state.appState.name,
            //        industry: state.appState.industry
            //    })
            //});

            //const newState = update(state, { appState: { scope: { $set: action.payload.scope }}});
        return state;
        }
        default:
            return state;
    }

};

//export function getAppState(state$: Observable<State>) {
//    return state$.select(s => s.appState);
//}



////// reducers.ts
////import { createSelector, createFeatureSelector } from '@ngrx/store';

////export interface FeatureState {
////  counter: number;
////}

////export interface AppState {
////  feature: FeatureState
////}

////export const selectFeature = (state: AppState) => state.feature;
////export const selectFeatureCount = createSelector(selectFeature, (state: FeatureState) => state.counter);

////export const selectFeature = createFeatureSelector<FeatureState>('feature');
////export const selectFeatureCount = createSelector(selectFeature, (state: FeatureState) => state.counter);

//import {
//  Action,
//  ActionReducerMap,
//  createSelector,
//  createFeatureSelector
//} from '@ngrx/store';

//export class ActionWithPayload implements Action {
//  type: string;
//  payload?: any;
//}

//export class UsersListActions {
//  static LOAD_USERS_LIST = '[UserManagement/Users List] Load Users List';
//  loadUsersList(): ActionWithPayload {
//    return {
//      type: UsersListActions.LOAD_USERS_LIST
//    };
//  }

//  static LOAD_USERS_LIST_SUCCESS = '[UserManagement/Users List] Load Users List Success';
//  loadUsersListSuccess(users: User[]): ActionWithPayload {
//    return {
//      type: UsersListActions.LOAD_USERS_LIST_SUCCESS,
//      payload: users
//    };
//  }
//}

//type User = {
//  id: number;
//  title: string;
//  //speaker: string;
//  //description: string;
//  //yourRating: number;
//  //rating: number;
//}

////export interface State {
////  appState: ApplicationModel
////};

////const initialState: State = {
////  appState: new ApplicationModel()
////};

//export interface State {
//  loaded: boolean;
//  loading: boolean;
//  entities: User[];
//}

//const initialState: State = {
//  loaded: false,
//  loading: true,
//  entities: [{ id: 1, title: 'title 01' }, { id: 2, title: 'title 02'}],
//}

//export function reducer(state = initialState, action: ActionWithPayload): State {
//  switch (action.type) {
//    case UsersListActions.LOAD_USERS_LIST:
//      return Object.assign({}, state, {
//        loading: true
//      });
//    case UsersListActions.LOAD_USERS_LIST_SUCCESS:
//      return Object.assign({}, state, {
//        loaded: true,
//        loading: false,
//        entities: action.payload
//      });
//    default:
//      return state;
//  }
//};

////export const getLoadedState = (state: State) => state.loaded;
////export const getLoadingState = (state: State) => state.loading;
////export const getEntitiesState = (state: State) => state.entities;

////export const userStateSelector = createFeatureSelector<State>('users');
//////export const userStateSelector = (state: State) => state;
////export const loadedState = createSelector(userStateSelector, getLoadedState);
////export const loadingState = createSelector(userStateSelector, getLoadingState);
////export const userState = createSelector(userStateSelector, getEntitiesState);

///*
//module

//imports: StoreModule.forFeature('users', userReducer);

//In component use select like this :

//public users$: Observable<User[]>;
//constructor(private userStore: Store<State>){
//  this.users$ = this.userStore.select(userState);
//}
//*/


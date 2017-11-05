import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromApp from "./ngrx/reducer";
//import * as fromDashboard from "../modules/dashboard/ngrx/reducer";
//import * as fromBlueprint from "../modules/blueprint/ngrx/reducer";
//import * as fromCost from "../modules/cost/ngrx/reducer";
//import * as fromDepreciation from "../modules/depreciation/ngrx/reducer";
//import * as fromFunds from "../modules/funds/ngrx/reducer";
//import * as fromInvest from "../modules/invest/ngrx/reducer";
//import * as fromLiquidity from "../modules/liquidity/ngrx/reducer";
//import * as fromRevenue from "../modules/revenue/ngrx/reducer";

/**
 * Treat each reducer like a table in a database. This means our top
 * level state interface is just a map of keys to inner state types.
 */
export interface State {
  appState: fromApp.State;
  //dashboardState: fromDashboard.State;
  //blueprint: fromBlueprint.State;
  //revenue: fromRevenue.State;
  //liquidityState: fromLiquidity.State;
  //investState: fromInvest.State;
  //fundsState: fromFunds.State;
  //depreciationState: fromDepreciation.State;
  //costState: fromCost.State;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers: ActionReducerMap<State> = {
  appState: fromApp.reducer
  //dashboardState: fromDashboard.reducer,
  //blueprint: fromBlueprint.reducer,
  //revenue: fromRevenue.reducer,
  //liquidityState: fromLiquidity.reducer,
  //investState: fromInvest.reducer,
  //fundsState: fromFunds.reducer,
  //depreciationState: fromDepreciation.reducer,
  //costState: fromCost.reducer
};

// appState: fromApp.State
export const getAppState = (state: State) => state.appState;
export const appStateSelector = (state: State) => state;
export const appState = createSelector(appStateSelector, getAppState);


//export function getAppState_(state$: Observable<State>) {
//  return state$.select(s => s.appState);
//}


// dashboardState: fromDashboard.State
// blueprint: fromBlueprint.State
// revenue: fromRevenue.State;
// liquidityState: fromLiquidity.State
// investState: fromInvest.State
// fundsState: fromFunds.State
// depreciationState: fromDepreciation.State
// costState: fromCost.State

import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromApp from "./ngrx/reducer";
import * as fromBlueprint from "../modules/blueprint/ngrx/reducer";
import * as fromDashboard from "../modules/dashboard/ngrx/reducer";
import * as fromCost from "../modules/cost/ngrx/reducer";
import * as fromDepreciation from "../modules/depreciation/ngrx/reducer";
import * as fromFunds from "../modules/funds/ngrx/reducer";
import * as fromInvest from "../modules/invest/ngrx/reducer";
import * as fromLiquidity from "../modules/liquidity/ngrx/reducer";
import * as fromRevenue from "../modules/revenue/ngrx/reducer";

/**
 * Treat each reducer like a table in a database. This means our top
 * level state interface is just a map of keys to inner state types.
 */
export interface State {
  appState: fromApp.State;
  blueprintState: fromBlueprint.State;
  dashboardState: fromDashboard.State;
  costState: fromCost.State;
  depreciationState: fromDepreciation.State;
  fundsState: fromFunds.State;
  investState: fromInvest.State;
  liquidityState: fromLiquidity.State;
  revenueState: fromRevenue.State;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers: ActionReducerMap<State> = {
  appState: fromApp.reducer,
  blueprintState: fromBlueprint.reducer,
  dashboardState: fromDashboard.reducer,
  costState: fromCost.reducer,
  depreciationState: fromDepreciation.reducer,
  fundsState: fromFunds.reducer,
  investState: fromInvest.reducer,
  liquidityState: fromLiquidity.reducer,
  revenueState: fromRevenue.reducer
};

export const stateSelector = (state: State) => state;

// appState: fromApp.State
export const getAppState = (state: State) => state.appState;
export const appState = createSelector(stateSelector, getAppState);

// blueprint: fromBlueprint.State
export const getBlueprintState = (state: State) => state.blueprintState;
export const blueprintState = createSelector(stateSelector, getBlueprintState);
export const getBlueprintProductsState = (state: State) => state.blueprintState.blueprintState.entity.products;
export const blueprintProductsState = createSelector(stateSelector, getBlueprintProductsState);
export const getBlueprintValueObjectState = (state: State) => state.blueprintState.blueprintState.valueObject;
export const blueprintValueObjectState = createSelector(stateSelector, getBlueprintValueObjectState);
export const getBlueprintEvaluationSystemState = (state: State) => state.blueprintState.blueprintState.evaluationSystemId;
export const blueprintEvaluationSystemState = createSelector(stateSelector, getBlueprintEvaluationSystemState);
export const getBlueprintEvaluationCriterionOptionState = (state: State) => state.blueprintState.blueprintState.evaluationCriterionId;
export const blueprintEvaluationCriterionOptionState = createSelector(stateSelector, getBlueprintEvaluationCriterionOptionState);
export const getBlueprintEntityState = (state: State) => state.blueprintState.blueprintState.entity;
export const blueprintEntityState = createSelector(stateSelector, getBlueprintEntityState);




// dashboardState: fromDashboard.State
export const getDashboardState = (state: State) => state.dashboardState;
export const dashboardState = createSelector(stateSelector, getDashboardState);
export const getDashboardEntityState = (state: State) => state.dashboardState.dashboardState.entity;
export const dashboardEntityState = createSelector(stateSelector, getDashboardEntityState);
export const getDashboardValueObjectState = (state: State) => state.dashboardState.dashboardState.valueObject;
export const dashboardValueObjectState = createSelector(stateSelector, getDashboardValueObjectState);

// costState: fromCost.State
export const getCostState = (state: State) => state.costState;
export const costState = createSelector(stateSelector, getCostState);
export const getCostEntityState = (state: State) => state.costState.costState.entity;
export const costEntityState = createSelector(stateSelector, getCostEntityState);
export const getCostValueObjectState = (state: State) => state.costState.costState.valueObject;
export const costValueObjectState = createSelector(stateSelector, getCostValueObjectState);

// depreciationState: fromDepreciation.State
export const getDepreciationState = (state: State) => state.depreciationState;
export const depreciationState = createSelector(stateSelector, getDepreciationState);
export const getDepreciationEntityState = (state: State) => state.depreciationState;
export const depreciationEntityState = createSelector(stateSelector, getDepreciationEntityState);
export const getDepreciationValueObjectState = (state: State) => state.depreciationState;
export const depreciationValueObjectState = createSelector(stateSelector, getDepreciationValueObjectState);

// fundsState: fromFunds.State
export const getFundsState = (state: State) => state.fundsState;
export const fundsState = createSelector(stateSelector, getFundsState);
export const getFundsEntityState = (state: State) => state.fundsState.fundsState.entity;
export const fundsEntityState = createSelector(stateSelector, getFundsEntityState);
export const getFundsValueObjectState = (state: State) => state.fundsState.fundsState.valueObject;
export const fundsValueObjectState = createSelector(stateSelector, getFundsValueObjectState);

// investState: fromInvest.State
export const getInvestState = (state: State) => state.investState;
export const investState = createSelector(stateSelector, getInvestState);
export const getInvestEntityState = (state: State) => state.investState.investState.entity;
export const investEntityState = createSelector(stateSelector, getInvestEntityState);
export const getInvestValueObjectState = (state: State) => state.investState.investState.valueObject;
export const investValueObjectState = createSelector(stateSelector, getInvestValueObjectState);

// liquidityState: fromLiquidity.State
export const getLiquidityState = (state: State) => state.liquidityState;
export const liquidityState = createSelector(stateSelector, getLiquidityState);
export const getLliquidityEntityState = (state: State) => state.liquidityState.liquidityState.entity;
export const liquidityEntityState = createSelector(stateSelector, getLliquidityEntityState);
export const getLiquidityValueObjectState = (state: State) => state.liquidityState.liquidityState.valueObject;
export const liquidityValueObjectState = createSelector(stateSelector, getLiquidityValueObjectState);


// revenueState: fromRevenue.State;
export const getRevenueState = (state: State) => state.revenueState;
export const revenueState = createSelector(stateSelector, getRevenueState);

export const getRevenueEntityState = (state: State) => state.revenueState.revenueState.entity;
export const revenueEntityState = createSelector(stateSelector, getRevenueEntityState);

export const getRevenueProjectRevenueState = (state: State) => state.revenueState.revenueState.entity.projectRevenue;
export const revenueProjectRevenueState = createSelector(stateSelector, getRevenueProjectRevenueState);

import { NgModule }       from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { FormsModule }    from "@angular/forms";
import { RouterModule }   from "@angular/router";
import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';

import { LiquidityComponent }         from "./liquidity.component";
import { LiquiditySettingsComponent } from "./components/liquidity-settings.component";
import { LiquidityEvaluateComponent } from "./components/liquidity-evaluate.component";
import { LiquidityEvaluateDefaultComponent } from "./components/evaluate/liquidity-evaluate-default.component";
import { LiquidityEvaluateFundsComponent } from "./components/evaluate/liquidity-evaluate-funds.component";

import { EffectsModule } from "@ngrx/effects";
import { LiquidityEffects } from "./ngrx/effects";
import { LiquidityService } from "./ngrx/service";

export const IMPORTS_MODULES = [
  BrowserModule,
  FormsModule,
  RouterModule,
  NgbModule,
  EffectsModule.forFeature([
    LiquidityEffects
  ])
];

const COMPONENTS = [
  LiquidityComponent,
  LiquiditySettingsComponent,
  LiquidityEvaluateComponent,
  LiquidityEvaluateDefaultComponent,
  LiquidityEvaluateFundsComponent
];

@NgModule({
  imports: [IMPORTS_MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [LiquidityService]

})
export class LiquidityModule { }


/*
TODO: Process of implementing ngrx
1.service
    register with modules
    import { CostService } from "./ngrx/service";
    providers: [CostService]
2.effects
    import { CostService } from "./service";
    register effects with entry modules
3.reducer
    register reducer within entry module:

    3.1 import * as fromLiquidity   from "../modules/Liquidity/ngrx/reducer";
    3.2 export interface State {
            ...
            liquidityState: fromLiquidity.State;
        }
    3.3 const reducers = {
          liquidityState: fromLiquidity.reducer
        };
    3.4 export function getLiquidityState(state$: Observable<State>) {
          return state$.select(state => state.liquidityState);
        }
    3.5 export const liquidityState = compose(fromLiquidity.getLiquidityState, getLiquidityState);

TODO: Reverence state
1.Create properties:
    public entityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private _store: Store<fromRoot.State>) {
        this.entityState = this._store.let(fromRoot.liquidityEntityState);
        this.valueObjectState = this._store.let(fromRoot.liquidityValueObjectState);
    }

2.Passing property as @Input within child component
    <connect-remote [entityState]="entityState | async"></connect-remote>
    @Input() entityState;
    <input type="text" class="form-control" [value]="entityState.name"> or {{entityState.name}}

3.Register child component
    import { ConnectRemoteComponent } from "./components/connect-remote.component";
    declarations: [..., ConnectRemoteComponent],
    exports: [..., ConnectRemoteComponent],


*/

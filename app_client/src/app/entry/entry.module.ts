import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EntryComponent } from './components/entry.component';
import { EntryHeaderComponent } from './header/entry-header.component';
import { EntryFooterComponent } from './footer/entry-footer.component';
import { NotFoundComponent } from './components/not-found.component';

import { Routing } from './entry.routing';
import { RepositoryModule } from '../repository/repository.module';

import { StoreModule } from '@ngrx/store';
import { reducers } from './entry.reducer';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./ngrx/effects";
//import { BlueprintEffects } from "../modules/blueprint/ngrx/effects";
//import { RevenueEffects } from "../modules/revenue/ngrx/effects";
//import { CostEffects } from "../modules/cost/ngrx/effects";
//import { DashboardEffects } from "../modules/dashboard/ngrx/effects";
//import { DepreciationEffects } from "../modules/depreciation/ngrx/effects";
//import { FundsEffects } from "../modules/funds/ngrx/effects";
//import { InvestEffects } from "../modules/invest/ngrx/effects";
//import { LiquidityEffects } from "../modules/liquidity/ngrx/effects";

import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { BlueprintModule } from '../modules/blueprint/blueprint.module';
import { ApplicationService } from './ngrx/service';

import { DashboardFirstGuard } from "./components/dashboardFirst.guard"; 

export const IMPORTS_MODULES = [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  DashboardModule,
  BlueprintModule,
  RepositoryModule,
  Routing,
  NgbModule.forRoot(),
  StoreModule.forRoot(reducers, {
    initialState: {}
  }),
  EffectsModule.forFeature ([
    AppEffects,
    //BlueprintEffects,
    //RevenueEffects,
    //CostEffects,
    //DashboardEffects,
    //DepreciationEffects,
    //FundsEffects,
    //InvestEffects,
    //LiquidityEffects
  ]),
  // Note that you must instrument after importing StoreModule
  StoreDevtoolsModule.instrument({
    maxAge: 5
  })
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [EntryComponent, EntryHeaderComponent, EntryFooterComponent, NotFoundComponent],
  exports: [EntryComponent],
  providers: [ApplicationService, DashboardFirstGuard]
})
export class EntryModule {}

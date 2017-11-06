import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
//import { DepreciationComponent } from "./depreciation.component";
//import { DepreciationTableComponent } from "./components/depreciation-table.component";
//import { ConnectRemoteComponent } from "./components/connect-remote.component";
//import { DepreciationEntryComponent } from "./components/depreciation-entry.component";


import { EffectsModule } from "@ngrx/effects";
import { DepreciationEffects } from "./ngrx/effects";
import { DepreciationService } from "./ngrx/service";

export const IMPORTS_MODULES = [
  BrowserModule,
  FormsModule,
  RouterModule,
  EffectsModule.forFeature([
    DepreciationEffects
  ])
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [/*DepreciationComponent, DepreciationTableComponent, DepreciationEntryComponent, ConnectRemoteComponent*/],
  exports: [/*DepreciationComponent, DepreciationTableComponent, DepreciationEntryComponent, ConnectRemoteComponent*/],
  providers: [DepreciationService]
})
export class DepreciationModule { }


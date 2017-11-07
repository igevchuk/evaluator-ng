import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FundsComponent } from "./funds.component";
//import { FundsSettingsComponent } from "./components/funds-settings.component";
//import { FundsLoanComponent } from "./components/funds-loan.component";
//import { FundsTableComponent } from "./components/funds-table.component";
//import { ConnectRemoteComponent } from "./components/connect-remote.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EffectsModule } from "@ngrx/effects";
import { FundsEffects } from "./ngrx/effects";
import { FundsService } from "./ngrx/service";

export const IMPORTS_MODULES = [
  BrowserModule,
  FormsModule,
  RouterModule,
NgbModule,
  EffectsModule.forFeature([
    FundsEffects
  ])
];

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [FundsComponent, /*FundsSettingsComponent, FundsLoanComponent, FundsTableComponent, ConnectRemoteComponent*/],
    exports: [FundsComponent, /*FundsSettingsComponent, FundsLoanComponent, FundsTableComponent, ConnectRemoteComponent*/],
    providers: [FundsService]
})
export class FundsModule { }


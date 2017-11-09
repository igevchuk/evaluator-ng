import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { InvestComponent } from "./invest.component";
import { InvestSettingsComponent } from "./components/invest-settings.component";
import { InvestInvestmentComponent } from "./components/invest-investment.component";
import { InvestTableComponent } from "./components/invest-table.component";
import { ConnectRemoteComponent } from "./components/connect-remote.component";

import { EffectsModule } from "@ngrx/effects";
import { InvestEffects } from "./ngrx/effects";
import { InvestService } from "./ngrx/service";

export const IMPORTS_MODULES = [
  BrowserModule,
  FormsModule,
  RouterModule,
  NgbModule,
  EffectsModule.forFeature([
    InvestEffects
  ])
];

const COMPONENTS = [
  InvestComponent,
  InvestSettingsComponent,
  InvestInvestmentComponent,
  InvestTableComponent,
  ConnectRemoteComponent
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
    providers: [InvestService]
})
export class InvestModule { }

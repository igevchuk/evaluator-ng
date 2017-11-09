import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FundsComponent } from "./funds.component";
import { FundsSettingsComponent } from "./components/funds-settings.component";
import { FundsSettingsRevolvingfundComponent } from "./components/settings/funds-settings-revolvingfund.component";
import { FundsSettingsLoanComponent } from "./components/settings/funds-settings-loan.component";

import { FundsFeaturesComponent } from "./components/funds-features.component";
import { FundsLoanComponent } from "./components/funds-loan.component";
import { FundsTableComponent } from "./components/common/funds-table.component";
import { ConnectRemoteComponent } from "./components/common/connect-remote.component";
import { TemplateFormsComponent } from "./components/common/template-forms.component";
import { ReactiveFormsComponent } from "./components/common/reactive-forms.component";
import { AngularMaterialComponent } from "./components/common/angular-material.component";


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

const COMPONENTS = [
  FundsComponent,
  FundsSettingsComponent,
  FundsLoanComponent,
  FundsTableComponent,
  ConnectRemoteComponent,
  FundsFeaturesComponent,
  TemplateFormsComponent,
  ReactiveFormsComponent,
  FundsSettingsRevolvingfundComponent,
  FundsSettingsLoanComponent,
  AngularMaterialComponent
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [FundsService]
})
export class FundsModule { }


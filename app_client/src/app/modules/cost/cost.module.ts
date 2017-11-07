import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { EffectsModule } from "@ngrx/effects";
import { CostEffects } from "./ngrx/effects";
import { CostService } from "./ngrx/service";

import { CostComponent } from "./cost.component";
//import { CostSettingsComponent } from "./components/cost-settings.component";
//import { CostOperatingComponent } from "./components/cost-operating.component";
//import { CostEvaluateComponent } from "./components/cost-evaluate.component";
//import { ConnectRemoteComponent } from "./components/connect-remote.component";

export const IMPORTS_MODULES = [
  BrowserModule,
  FormsModule,
  RouterModule,
  NgbModule,
  EffectsModule.forFeature([
    CostEffects
  ])
];

const COMPONENTS = [
  CostComponent
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [CostService]
})
export class CostModule { }

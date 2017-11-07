import { NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Store, StoreModule } from '@ngrx/store';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './../../material/material.module';
//import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { BlueprintComponent } from './blueprint.component';
import { BlueprintService } from "./ngrx/service";

import { EffectsModule } from "@ngrx/effects";
import { BlueprintEffects } from "./ngrx/effects";

import { BlueprintSettingsComponent } from "./components/settings/blueprint-settings.component";
import { BlueprintPlanningComponent } from "./components/planning/blueprint-planning.component";
import { BlueprintProfileComponent } from "./components/profile/blueprint-profile.component";
import { BlueprintPricingComponent } from "./components/pricing/blueprint-pricing.component";
import { BlueprintPlanningSphereComponent } from "./components/planning/blueprint-planning-sphere.component";
import { BlueprintPlanningProductComponent } from "./components/planning/blueprint-planning-product.component";
import { BlueprintSettingsSphereComponent } from "./components/settings/blueprint-settings-sphere.component";
import { BlueprintSettingsDurationComponent } from "./components/settings/blueprint-settings-duration.component";



const COMPONENTS = [
  BlueprintComponent,
  BlueprintSettingsComponent,
  BlueprintPlanningComponent,
  BlueprintProfileComponent,
  BlueprintPricingComponent,
  BlueprintPlanningSphereComponent,
  BlueprintPlanningProductComponent,
  BlueprintSettingsSphereComponent,
  BlueprintSettingsDurationComponent
];

export const IMPORTS_MODULES = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  StoreModule,
  NgbModule,
  MaterialModule,
  //MatButtonModule,
  //MatCheckboxModule,
  EffectsModule.forFeature([
    BlueprintEffects
  ])
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [BlueprintService]
})
export class BlueprintModule { }

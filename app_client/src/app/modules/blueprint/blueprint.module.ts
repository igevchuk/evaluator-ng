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

const COMPONENTS = [
    BlueprintComponent,
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { DashboardPanelComponent } from "./components/dashboard-panel.component";
import { ConnectRemoteComponent } from "./components/connect-remote.component";

import { EffectsModule } from "@ngrx/effects";
import { DashboardEffects } from "./ngrx/effects";
import { DashboardService } from "./ngrx/service";


export const IMPORTS_MODULES = [
  BrowserModule,
  FormsModule,
  RouterModule,
  NgbModule,
  EffectsModule.forFeature([
    DashboardEffects
  ])
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [DashboardComponent, DashboardPanelComponent, ConnectRemoteComponent],
  exports: [DashboardComponent, DashboardPanelComponent, ConnectRemoteComponent],
  providers: [DashboardService]
})
export class DashboardModule { }

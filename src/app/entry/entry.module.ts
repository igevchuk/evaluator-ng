import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { EntryComponent } from './components/entry.component';
import { EntryHeaderComponent } from './header/entry-header.component';
import { EntryFooterComponent } from './footer/entry-footer.component';

import { Routing } from './entry.routing';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { BlueprintModule } from '../modules/blueprint/blueprint.module';
import { NotFoundComponent } from './components/not-found.component';

import { SharedState, SHARED_STATE } from '../services/sharedState.model';

// import { ApplicationService } from './ngrx/service';
// import { Routing } from './entry.routing';
// import { reducer } from './entry.reducer';

export const IMPORTS_MODULES = [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  DashboardModule,
  BlueprintModule,
  Routing
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [EntryComponent, EntryHeaderComponent, EntryFooterComponent, NotFoundComponent],
  exports: [EntryComponent],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }]
})
export class EntryModule { }

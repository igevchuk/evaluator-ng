import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { EntryComponent } from './components/entry.component';
import { EntryHeaderComponent } from './header/entry-header.component';
import { EntryFooterComponent } from './footer/entry-footer.component';
import { NotFoundComponent } from './components/not-found.component';

import { Routing } from './entry.routing';
import { RepositoryModule } from '../repository/repository.module';

import { StoreModule } from '@ngrx/store';
import { reducers } from './entry.reducer';


import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { BlueprintModule } from '../modules/blueprint/blueprint.module';

// import { ApplicationService } from './ngrx/service';

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
  StoreModule.forRoot(reducers, {
    initialState: {}
  })
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [EntryComponent, EntryHeaderComponent, EntryFooterComponent, NotFoundComponent],
  exports: [EntryComponent],
  providers: []
})
export class EntryModule { }

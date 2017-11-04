import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { EntryComponent } from "./components/entry.component";
import { EntryHeaderComponent } from "./header/entry-header.component";
import { EntryFooterComponent } from "./footer/entry-footer.component";

import { Routing } from "./entry.routing";
import { DashboardModule } from "../modules/dashboard/dashboard.module";
import { BlueprintModule } from "../modules/blueprint/blueprint.module";
import { NotFoundComponent } from "./components/notFound.component";

//import { ApplicationService } from "./ngrx/service";
//import { Routing } from "./entry.routing";
//import { reducer } from "./entry.reducer"; 

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
  providers: []
})
export class EntryModule { }

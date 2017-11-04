import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { EntryComponent } from "./components/entry.component";
import { EntryHeaderComponent } from "./header/entry-header.component";
import { EntryFooterComponent } from "./footer/entry-footer.component";

//import { NotFoundComponent } from "./components/notFound.component";
//import { ApplicationService } from "./ngrx/service";
//import { Routing } from "./entry.routing";
//import { reducer } from "./entry.reducer"; 

export const IMPORTS_MODULES = [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [EntryComponent, EntryHeaderComponent, EntryFooterComponent],
  exports: [EntryComponent],
  providers: []
})
export class EntryModule { }

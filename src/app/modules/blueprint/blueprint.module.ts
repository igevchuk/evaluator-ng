import { NgModule, EventEmitter } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Store, StoreModule } from "@ngrx/store";

import { BlueprintComponent } from './blueprint.component';

const COMPONENTS = [
    BlueprintComponent,
];

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModule.forRoot(), StoreModule],
    declarations: [...COMPONENTS],
    exports: [ ...COMPONENTS],
    providers: []
})
export class BlueprintModule { }

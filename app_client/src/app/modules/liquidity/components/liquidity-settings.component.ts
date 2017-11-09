import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

//import { BlueprintModel, Settings } from "../ngrx/model";
import { AppReducer } from './../app.reducer';
import * as actions from "./../ngrx/actions"

@Component({
    selector: "liquidity-settings",
    templateUrl: "liquidity-settings.component.html",
})
export class LiquiditySettingsComponent {
    public entityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private store$: Store<AppReducer.State>) {
      this.entityState = this.store$.select(AppReducer.liquidityEntityState);
      this.valueObjectState = this.store$.select(AppReducer.liquidityValueObjectState);
    }

    taxMode: string = "composite";

    getProjects() {
        return Array("Project01", "Project02");
    }

    getMode(): string {
        let mode = this.taxMode == "composite" ? "composite" : "separate";
        return mode;
    }  
}

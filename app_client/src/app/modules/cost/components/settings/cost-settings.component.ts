import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";
//import * as fromRoot from '../../../entry/entry.reducer';
//import * as actions from "../ngrx/actions"
//import { rootReducer, actions, CostService, BlueprintModel, Product } from "./../../ngrx/index";


@Component({
    selector: "cost-settings",
    templateUrl: "cost-settings.component.html"
})
export class CostSettingsComponent {

    //public entityState: Observable<any>;
    //public valueObjectState: Observable<any>;

    //constructor(private store$: Store<rootReducer.State>) {
    //  this.entityState = this.store$.select(rootReducer.costEntityState);
    //  this.valueObjectState = this.store$.select(rootReducer.costValueObjectState);
    //}

    //getProjects() {
    //    return Array("Mode", "Percent", "FixedCost", "DynamicCost");
    //}
}

import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

import { AppReducer } from './../app.reducer';
import * as actions from "./../ngrx/actions"


@Component({
    selector: "invest-settings",
    templateUrl: "invest-settings.component.html"
})
export class InvestSettingsComponent {

    public entityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private store$: Store<AppReducer.State>) {
      this.entityState = this.store$.select(AppReducer.investEntityState);
      this.valueObjectState = this.store$.select(AppReducer.investValueObjectState);
    }

    getProjects() {
        return Array("Project01", "Project02");
    }
}

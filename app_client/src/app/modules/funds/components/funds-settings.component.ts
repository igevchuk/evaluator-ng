import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";
//import * as fromRoot from '../../../entry/entry.reducer';
import { AppReducer } from './../app.reducer';
import * as actions from "./../ngrx/actions"

@Component({
    selector: "funds-settings",
    templateUrl: "funds-settings.component.html"
})
export class FundsSettingsComponent {

    public entityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private store$: Store<AppReducer.State>) { 
      this.entityState = this.store$.select(AppReducer.fundsEntityState);
      this.valueObjectState = this.store$.select(AppReducer.fundsValueObjectState);
    }

}

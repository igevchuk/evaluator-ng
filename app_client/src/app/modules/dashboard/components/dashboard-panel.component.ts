import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";
import * as actions from "../ngrx/actions"
import * as fromRoot from '../../../entry/entry.reducer';

@Component({
    selector: "dashboard-panel",
    templateUrl: "dashboard-panel.component.html"
})
export class DashboardPanelComponent {

    public entityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private store$: Store<fromRoot.State>) {
      this.entityState = this.store$.select(fromRoot.dashboardEntityState);
      this.valueObjectState = this.store$.select(fromRoot.dashboardValueObjectState);
    }
}

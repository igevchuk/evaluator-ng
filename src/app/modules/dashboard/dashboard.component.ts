import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";

@Component({
  selector: "dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
    //public dashboardState: Observable<DashboardModel>; 

    //constructor(private _store: Store<fromRoot.State>) {
    //    this.dashboardState = this._store.let(fromRoot.dashboardEntityState);
    //}

    //ngOnInit() {
    //    this.dashboardState.subscribe(state => {
    //        if (state.hasLoaded == false) {
    //            //this._store.dispatch(new actions.InitializeAction({}));
    //        }
    //    });
    //}
}

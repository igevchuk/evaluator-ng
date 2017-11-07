import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
import * as actions from "./ngrx/actions"
import * as fromRoot from '../../entry/entry.reducer';
import { DashboardModel } from "./ngrx/model";

@Component({
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
  public dashboardState: Observable<any>;

  constructor(private store$: Store<fromRoot.State>) {
    this.dashboardState = this.store$.select(fromRoot.dashboardState);
  }

  ngOnInit() {
    this.dashboardState.subscribe(state => {
      if (state.hasLoaded == false) {
        //this._store.dispatch(new actions.InitializeAction({}));
      }
    });
  }
}

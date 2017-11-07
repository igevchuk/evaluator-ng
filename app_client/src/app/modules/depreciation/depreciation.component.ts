import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
import * as actions from "./ngrx/actions"
import * as fromRoot from '../../entry/entry.reducer';
import { DepreciationModel } from "./ngrx/model";

@Component({
  selector: "depreciation",
  templateUrl: "depreciation.component.html"
})
export class DepreciationComponent {
    public depreciationState: Observable<any>; 

    constructor(private store$: Store<fromRoot.State>) {
      this.depreciationState = this.store$.select(fromRoot.depreciationState);
    }

    ngOnInit() {
        this.depreciationState.subscribe(state => {
            if (state.hasLoaded == false) {
              //this.store$.dispatch(new actions.InitializeAction({}));
            }
        });
    }
}

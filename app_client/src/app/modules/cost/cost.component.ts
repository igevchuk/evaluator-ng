import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
import * as actions from "./ngrx/actions"
import * as fromRoot from '../../entry/entry.reducer';
import { CostModel } from "./ngrx/model";

@Component({
  selector: "cost",
  templateUrl: "cost.component.html"
})
export class CostComponent {
    costState: Observable<any>;

    task: string = "settings";
    private tasks: string[];

    constructor(private store$: Store<fromRoot.State>) {
      this.costState = this.store$.select(fromRoot.costState);

        this.tasks = new Array<string>(
            "Settings",
            "Operating",
            "Evaluate"
        );
    }

    ngOnInit() {
        this.costState.subscribe(state => {
            if (state.hasLoaded == false) {
                //this._store.dispatch(new actions.InitializeAction({}));
            }
        });
    }

    getTask(): string[] {
        return this.tasks;
    }

    onChange(e) {
        this.task = e.target.name;
    }

}

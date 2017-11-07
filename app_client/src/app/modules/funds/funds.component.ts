import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
import * as fromRoot from '../../entry/entry.reducer';
import * as actions from "./ngrx/actions"
import { FundsModel } from "./ngrx/model";

@Component({
    selector: "funds",
    templateUrl: "funds.component.html"
})
export class FundsComponent {
    public fundsState: Observable<any>; 
    task: string = "settings";
    private tasks: string[];

    constructor(private store$: Store<fromRoot.State>) {
      this.fundsState = this.store$.select(fromRoot.fundsState);

        this.tasks = new Array<string>(
            "Settings",
            "Loan"
        );
    }

    ngOnInit() {
        this.fundsState.subscribe(state => {
            if (state.hasLoaded == false) {
              //this.store$.dispatch(new actions.InitializeAction({}));
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

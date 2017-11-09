import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";

//import { RevenueModel } from "./ngrx/model";
import { AppReducer } from './app.reducer';
import * as actions from "./ngrx/actions"

@Component({
    templateUrl: "revenue.component.html"
})
export class RevenueComponent {
    revenueState: Observable<any>;

    task: string = "settings";
    private tasks: string[];
        
    constructor(private store$: Store<AppReducer.State>) {
      this.revenueState = this.store$.select(AppReducer.revenueState);

        this.tasks = new Array<string>(
            "Settings",
            "Taxes"
        );       
    }

    ngOnInit() {
        this.revenueState.subscribe(state => {
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

    loadRevenue() {
        console.log("loadRevenue");
    }

}

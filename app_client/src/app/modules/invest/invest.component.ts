import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
//import * as fromRoot from '../../entry/entry.reducer';
import { AppReducer } from './app.reducer';
import * as actions from "./ngrx/actions"
import { InvestModel} from "./ngrx/model";

@Component({
  selector: "invest",
  templateUrl: "invest.component.html"
})
export class InvestComponent {
    investState: Observable<any>;

    task: string = "settings";
    private tasks: string[];

    constructor(private store$: Store<AppReducer.State>) {
      this.investState = this.store$.select(AppReducer.investState);

        this.tasks = new Array<string>(
            "Settings",
            "Investment"
        );
    }

    ngOnInit() {
        this.investState.subscribe(state => {
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

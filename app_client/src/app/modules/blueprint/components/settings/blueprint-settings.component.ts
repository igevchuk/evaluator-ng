import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

import { rootReducer, actions, BlueprintModel, Settings } from "./../../ngrx/index";
//import * as fromRoot from '../../../entry/entry.reducer';
//import * as actions from "../ngrx/actions"

@Component({
  selector: "blueprint-settings",
  templateUrl: "blueprint-settings.component.html",
})
export class BlueprintSettingsComponent {
  evaluationCriterionId: Observable<number>;
  evaluationSystemId: Observable<number>;

  evaluationCriterion: Observable<Array<any>>;
  evaluationSystem: Observable<Array<any>>;

  blueprintEntityState: Observable<any>;
  valueObjectState: Observable<any>;

  constructor(private store$: Store<rootReducer.State>) {
    this.evaluationCriterionId = this.store$.select(rootReducer.blueprintEvaluationCriterionOptionState);
    this.evaluationSystemId = this.store$.select(rootReducer.blueprintEvaluationSystemState);
    this.blueprintEntityState = this.store$.select(rootReducer.blueprintEntityState);
    this.valueObjectState = this.store$.select(rootReducer.blueprintValueObjectState);
  }

  ngOnInit() {

  }

  evaluationCriterionHandler(value: number) {
    //console.log(value);
    //this.store$.dispatch(new actions.VerifyOptionAction({
    //  evaluationCriterionId: value,
    //  evaluationSystemId: -1
    //}));
  }

  evaluationSystemHandler(value: number) {
    //console.log(value);
    //this.store$.dispatch(new actions.VerifyOptionAction({
    //  evaluationCriterionId: -1,
    //  evaluationSystemId: value
    //}));
  }

}

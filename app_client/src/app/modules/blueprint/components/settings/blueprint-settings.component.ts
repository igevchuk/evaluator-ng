import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

import { AppReducer } from "./../../app.reducer";
import { BlueprintModel, Settings } from "./../../ngrx/model";
import * as actions from "./../../ngrx/actions"

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

  constructor(private store$: Store<AppReducer.State>) {
    this.evaluationCriterionId = this.store$.select(AppReducer.blueprintEvaluationCriterionOptionState);
    this.evaluationSystemId = this.store$.select(AppReducer.blueprintEvaluationSystemState);
    this.blueprintEntityState = this.store$.select(AppReducer.blueprintEntityState);
    this.valueObjectState = this.store$.select(AppReducer.blueprintValueObjectState);
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

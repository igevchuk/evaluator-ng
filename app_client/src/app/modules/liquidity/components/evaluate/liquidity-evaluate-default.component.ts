import { Component, Inject, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

//import { BlueprintModel, Settings } from "../../ngrx/model";
//import * as fromRoot from '../../../entry/entry.reducer';
//import * as actions from "../ngrx/actions"

@Component({
  selector: "liquidity-evaluate-default",
    templateUrl: "liquidity-evaluate-default.component.html",
})
export class LiquidityEvaluateDefaultComponent {
    @Input() entityState;

}

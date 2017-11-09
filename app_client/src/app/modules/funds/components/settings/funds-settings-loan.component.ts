import { Component, Inject, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

@Component({
  selector: "funds-settings-loan",
    templateUrl: "funds-settings-loan.component.html"
})
export class FundsSettingsLoanComponent {

  onOpenChange(event) {
    let aa = event.openChange as EventEmitter<any>;
    let bb = null;
    console.log(aa.subscribe(e => bb = e));
  }
}

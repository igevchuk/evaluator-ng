import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

@Component({
  selector: "blueprint-pricing",
  templateUrl: "blueprint-pricing.component.html"
})
export class BlueprintPricingComponent {
  title = 'app works!';
  price = 140;
  description = "this is description";

  model;

  constructor() {
    this.model = {
      sex: "female"
    };
  }
}

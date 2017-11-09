import { Component, Inject } from "@angular/core";
import { Http } from "@angular/http";

import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

enum Action {
  add,
  remove,
  search,
  down,
  up
}

@Component({
  selector: "funds-settings-revolvingfund",
  templateUrl: "funds-settings-revolvingfund.component.html",
  //styleUrls: ["funds-settings-revolvingfund.component.css"],
  // https://www.youtube.com/watch?v=UnKsoCeTdEI
  // https://materialdesignicons.com/
  // https://jsonplaceholder.typicode.com/photos
  // https://www.materialpalette.com/
  // https://material.io/icons/
  // https://medium.com/@ladyleet/setting-up-your-first-angular-2-project-using-angular-material2-5db18a174165
  styles: [`
    .example-spacer {
      flex: 1 1 auto;
    }
  `]
})
export class FundsSettingsRevolvingfundComponent {
  myData: Array<any>;

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }

  onChange(e) {
    switch (e.target.id) {
      case Action[Action.add]:
        break;
      case Action[Action.remove]:
        break;
      case Action[Action.search]:
        break;
      case Action[Action.up]:
        break;
      case Action[Action.down]:
        break;
      default:
    }
    console.log(e.target.id);
  }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import * as fromRoot from '../entry.reducer';
import { ApplicationModel } from "../ngrx/model";
import * as actions from "../ngrx/actions"

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html'
})
export class EntryComponent {
  appState$: Observable<any>; // any is ok too
  name: string = 'Paxibay';
  count: number = 10;
  flag: boolean = true;
  
  constructor(private store$: Store<fromRoot.State>) {
    this.appState$ = this.store$.select(fromRoot.appState);
    this.appState$.subscribe(appState => console.log(appState));

    //console.log(this.name.toLowerCase());
    //console.log(this.name.charAt(0));
    //console.log(this.name.substring(2, 5));

    //console.log(this.count.toFixed(2));
    //console.log(this.count.toString(16));

    //console.log(this.flag.toString());
  }

  ngOnInit() {
    this.appState$.subscribe(appState => {
      if (appState.hasLoaded == undefined || appState.hasLoaded == false) {
        this.store$.dispatch(new actions.InitializeAction({}));
        //this._store.dispatch(new actions.InitializeAction({}));
        //this._store.dispatch(new actions.InitializeAction({}));
        //this._store.dispatch(new actions.InitializeAction({}));
      }
    });
  }

}



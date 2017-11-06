import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import * as fromRoot from '../entry.reducer';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html'
})
export class EntryComponent {
  appState$: Observable<any>;
  name: string = 'Paxibay';
  count: number = 10;
  flag: boolean = true;
  
  constructor(private _store: Store<fromRoot.State>) {
    this.appState$ = this._store.select(fromRoot.appState);
    this.appState$.subscribe(appState => console.log(appState));

    //console.log(this.name.toLowerCase());
    //console.log(this.name.charAt(0));
    //console.log(this.name.substring(2, 5));

    //console.log(this.count.toFixed(2));
    //console.log(this.count.toString(16));

    //console.log(this.flag.toString());
  }
}

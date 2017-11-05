import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import * as fromRoot from '../entry.reducer';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html'
})
export class EntryComponent {
  public appState$: Observable<any>;

  constructor(private _store: Store<fromRoot.State>) {
    this.appState$ = this._store.select(fromRoot.appState);
    this.appState$.subscribe(appState => console.log(appState));
  }
}

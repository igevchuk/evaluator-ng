import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import * as fromRoot from '../entry.reducer';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html'
})
export class EntryComponent {
  public appState$: Observable<fromRoot.State>;

  constructor(private userStore: Store<fromRoot.State>) {
    this.appState$ = this.userStore.select(fromRoot.appState);
    this.appState$.subscribe(appState => console.log(appState));
  }
}

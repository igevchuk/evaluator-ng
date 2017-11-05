import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import * as fromRoot from '../entry.reducer';
//import * as fromRoot from "../ngrx/reducer"

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html'
})
export class EntryComponent {
  public users$: Observable<any>;

  constructor(private userStore: Store<fromRoot.State>) {
    this.users$ = this.userStore.select(fromRoot.userState);
    this.users$.subscribe(users => console.log(users));
  }
}

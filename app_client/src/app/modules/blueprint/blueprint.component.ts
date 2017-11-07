import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, Routes, RouterModule } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { State, Store } from '@ngrx/store';
import * as actions from './ngrx/actions'
import * as fromRoot from '../../entry/entry.reducer';
import { ApplicationModel, BlueprintModel } from './ngrx/model';

@Component({
  templateUrl: 'blueprint.component.html'
})
export class BlueprintComponent {
  blueprintState$: Observable<any>;
  task: string = 'settings';
  private tasks: string[];

  constructor(private store$: Store<fromRoot.State>, private _router: Router) {
    this.blueprintState$ = this.store$.select(fromRoot.blueprintState);

    this.tasks = new Array<string>(
      'Settings',
      'Planning',
      'Pricing',
      'Profile'
    );

  }

  ngOnInit() {

    this.blueprintState$.subscribe(state => {
      if (state.hasLoaded == false) {
        //this._router.navigateByUrl('/');
        //this._store.dispatch(new actions.InitializeAction({}));
      }
    });
  }

  getTask(): string[] {
    return this.tasks;
  }

  onChange(e) {
    this.task = e.target.name;
  }

}

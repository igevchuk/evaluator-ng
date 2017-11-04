import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';

import { SharedState, SHARED_STATE } from './bridge/sharedState.model';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

import { EntryModule } from "./entry/entry.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EntryModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }],
  bootstrap: [AppComponent]
})
export class AppModule { }

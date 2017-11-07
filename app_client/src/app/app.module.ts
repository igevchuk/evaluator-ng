import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { EntryModule } from './entry/entry.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

import { EffectsModule } from "@ngrx/effects";

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    EntryModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    EffectsModule.forRoot([])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, NgbModule.forRoot()],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: []
})
export class DashboardModule { }

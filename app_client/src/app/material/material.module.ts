// https://material.angular.io/guide/getting-started
// https://ng-bootstrap.github.io/#/getting-started
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

export const IMPORTS_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
];
@NgModule({
  imports: [...IMPORTS_MODULES],
  exports: [MatButtonModule, MatCheckboxModule]
})
export class MaterialModule { }

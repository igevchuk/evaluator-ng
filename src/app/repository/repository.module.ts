import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { Repository } from './repository';
import { Resolver } from './resolver';
import { DataSource, REST_URL } from './repository.datasource';

@NgModule({
  imports: [HttpModule, JsonpModule],
  providers: [
    Repository,
    DataSource,
    { provide: REST_URL, useValue: 'http://localhost:3500' }
  ]
})
export class RepositoryModule { }

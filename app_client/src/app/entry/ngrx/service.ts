import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApplicationModel, Repository } from "./model";

@Injectable()
export class ApplicationService {

  constructor(private repo: Repository) { }

  get Application(): Observable<ApplicationModel> {
    return this.repo.Application;
  }
}

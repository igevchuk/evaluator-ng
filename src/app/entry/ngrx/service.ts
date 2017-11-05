import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApplicationModel } from '../../repository/model';
import { Repository } from '../../repository/repository';

@Injectable()
export class ApplicationService {

  constructor(private repo: Repository) { }

  get Application(): Observable<ApplicationModel> {
    return this.repo.Application;
  }
}

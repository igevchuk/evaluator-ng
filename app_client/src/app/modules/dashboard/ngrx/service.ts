import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { DashboardModel, Repository } from "./model";

@Injectable()
export class DashboardService {

  constructor(private repo: Repository) { }

    get Dashboard(): Observable<DashboardModel> {
        return this.repo.Dashboard;
    }
}

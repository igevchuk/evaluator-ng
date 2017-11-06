import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { CostModel, Repository } from "./model";

@Injectable()
export class CostService {

  constructor(private repo: Repository) { }

    get Cost(): Observable<CostModel> {
        return this.repo.Cost;
    }


}

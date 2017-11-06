import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { LiquidityModel, Repository } from "./model";

@Injectable()
export class LiquidityService {

    constructor(private repo: Repository) { }

    get Liquidity(): Observable<LiquidityModel> {
        return this.repo.Liquidity;
    }


}

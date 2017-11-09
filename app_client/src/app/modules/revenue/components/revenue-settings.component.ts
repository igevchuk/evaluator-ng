import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";

import { BlueprintModel, RevenueModel, Product } from "../ngrx/model";
import { AppReducer } from './../app.reducer';
import * as actions from "./../ngrx/actions"

@Component({
    selector: "revenue-settings",
    templateUrl: "revenue-settings.component.html"
})
export class RevenueSettingsComponent {
    //public revenueState: Observable<RevenueModel>;
    public products: Observable<any>;
    public revenueEntityState: Observable<any>;
    public revenueProjectRevenueState: Observable<any>;

    constructor(private store$: Store<AppReducer.State>) {
        //this.revenueState = this.store$.select(AppReducer.revenueState);
      this.products = this.store$.select(AppReducer.blueprintProductsState);
      this.revenueEntityState = this.store$.select(AppReducer.revenueEntityState);
      this.revenueProjectRevenueState = this.store$.select(AppReducer.revenueProjectRevenueState);
      
    }

    ngOnInit() {
        //console.log("revenue ngOnInit");
        //const scope = this.blueprint.scope;
        //const products = this.blueprint.products;

        
    }

    //loadRevenue() {
    //    console.log("loadRevenue");
    //    this._store.dispatch(new actions.InitializeAction({
    //        // LoadRevenueAction
    //    }));
    //}

   
}

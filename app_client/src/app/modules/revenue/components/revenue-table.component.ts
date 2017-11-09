import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

//import { StaticModel } from "../../../repo/repository-static";
//import { Product } from "../../../repo/repo.model";

@Component({
    selector: "revenue-table",
    templateUrl: "revenue-table.component.html"
})
export class RevenueTableComponent {

  //constructor(private model: StaticModel) { }

  //getProducts(): Product[] {
  //  return this.model.getProducts();
  //}

  //selectedProduct: string;

  //getSelected(product: Product): boolean {
  //  return product.name == this.selectedProduct;
  //}
}

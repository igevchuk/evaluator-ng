import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

//import { StaticModel } from "../../../repo/repository-static";
//import { Product} from "../../../repo/repo.model";

@Component({
    selector: "funds-features",
    templateUrl: "funds-features.component.html"
})
export class FundsFeaturesComponent {

    //constructor(private model: StaticModel) { }

    //getProducts(): Product[] {
    //    return this.model.getProducts();
    //}

    //newProduct: Product = new Product();

    //get jsonProduct() {
    //    return JSON.stringify(this.newProduct);
    //}

    //addProduct(p: Product) {
    //    console.log("New Product: " + this.jsonProduct);
    //}

    //getValidationMessages(state: any, thingName?: string) {
    //    let thing: string = state.path || thingName;
    //    let messages: string[] = [];
    //    if (state.errors) {
    //        for (let errorName in state.errors) {
    //            switch (errorName) {
    //                case "required":
    //                    messages.push(`You must enter a ${thing}`);
    //                    break;
    //                case "minlength":
    //                    messages.push(`A ${thing} must be at least
    //                        ${state.errors['minlength'].requiredLength}
    //                        characters`);
    //                    break;
    //                case "pattern":
    //                    messages.push(`The ${thing} contains illegal characters`);
    //                    break;
    //            }
    //        }
    //    }
    //    return messages;
    //}

    //formSubmitted: boolean = false;

    //submitForm(form: NgForm) {
    //    this.formSubmitted = true;
    //    if (form.valid) {
    //        this.addProduct(this.newProduct);
    //        this.newProduct = new Product();
    //        form.reset();
    //        this.formSubmitted = false;
    //    }
    //}

    //getFormValidationMessages(form: NgForm): string[] {
    //    let messages: string[] = [];
    //    Object.keys(form.controls).forEach(k => {
    //        this.getValidationMessages(form.controls[k], k)
    //            .forEach(m => messages.push(m));
    //    });
    //    return messages;
    //}


}

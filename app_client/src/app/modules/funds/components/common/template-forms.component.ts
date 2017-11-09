import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

//import { StaticModel } from "../../../../repo/repository-static";
//import { Product} from "../../../../repo/repo.model";

@Component({
    selector: "template-forms",
    templateUrl: "template-forms.component.html"
})
export class TemplateFormsComponent {

    onSubmit(formData) {
        console.log(formData);

    }

}

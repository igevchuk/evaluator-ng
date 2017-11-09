import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm, FormControl, FormGroup, FormArray, Validators } from "@angular/forms";

//import { StaticModel } from "../../../../repo/repository-static";
//import { Product} from "../../../../repo/repo.model";

/**
 * Returns `true` if FormControl's value represents a valid SSN,
 * otherwise returns `false`.
 */
function ssnValidator(control: FormControl): { [key: string]: any } {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : { ssn: true };
}

/**
 * Returns `true` if all FormControls in the specified FormGroup have exactly
 * the same value. Otherwise returns `false`.
 */
function equalValidator({value}: FormGroup): { [key: string]: any } {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first]);
    return valid ? null : { equal: true };

}

@Component({
    selector: "reactive-forms",
    templateUrl: "reactive-forms.component.html"
})
export class ReactiveFormsComponent {

    //formModel: FormGroup;

    //constructor() {
    //    this.formModel = new FormGroup({
    //        'username': new FormControl('', Validators.required),
    //        'ssn': new FormControl('', ssnValidator),
    //        'passwordsGroup': new FormGroup({
    //            'password': new FormControl('', Validators.minLength(5)),
    //            'pconfirm': new FormControl('')
    //        }, equalValidator)
    //    });
    //}

    //onSubmit() {
    //    if (this.formModel.valid) {
    //        console.log(this.formModel.value);
    //    }
    //}
}

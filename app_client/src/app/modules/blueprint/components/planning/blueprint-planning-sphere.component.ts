import { Component, Inject, Input, Output, EventEmitter } from "@angular/core";
import { ApplicationModel, BlueprintModel, RevenueModel } from "../../ngrx/model";

@Component({
  selector: "blueprint-planning-sphere",
  templateUrl: "blueprint-planning-sphere.component.html"
})
export class BlueprintPlanningSphereComponent {
  @Input() blueprint: BlueprintModel;
  @Input() appState;

  @Output() changeScopeEvent = new EventEmitter;

}  

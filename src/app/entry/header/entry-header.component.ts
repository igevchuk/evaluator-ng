import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";

@Component({
  selector: 'entry-header',
  templateUrl: 'entry-header.component.html',
  styles: []
})
export class EntryHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public selectedModule = null;
  public modules: Array<any> = [
    { key: "/", value: "Dashboard" },
    { key: "/blueprint", value: "Blueprint" },
    { key: "/revenue", value: "Revenue" },
    { key: "/cost", value: "Cost" },
    { key: "/liquidity", value: "Liquidity" },
    { key: "/invest", value: "Invest" },
    { key: "/funds", value: "Funds" },
    { key: "/depreciation", value: "Depreciation" },
    { key: "/ngxredux", value: "Ngx Redux" }
  ];

  onChangeModule(newModule?: string) {
    this.selectedModule = newModule;
  }

}

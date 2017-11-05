import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'entry-header.component.html',
  styles: []
})
export class EntryHeaderComponent implements OnInit {
  selectedModule = null;
  modules: Array<any> = [
    { key: '/', value: 'Dashboard' },
    { key: '/blueprint', value: 'Blueprint' },
    { key: '/revenue', value: 'Revenue' },
    { key: '/cost', value: 'Cost' },
    { key: '/liquidity', value: 'Liquidity' },
    { key: '/invest', value: 'Invest' },
    { key: '/funds', value: 'Funds' },
    { key: '/depreciation', value: 'Depreciation' },
    { key: '/ngxredux', value: 'Ngx Redux' }
  ];

  constructor() { }

  onChangeModule(newModule?: string) {
    this.selectedModule = newModule;
  }

  ngOnInit() {
  }
}

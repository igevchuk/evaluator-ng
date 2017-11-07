import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { BlueprintComponent } from '../modules/blueprint/blueprint.component';
import { NotFoundComponent } from './components/not-found.component';
import { DashboardFirstGuard }    from './components/dashboardFirst.guard';

// const blueprintChildRoutes: Routes = [
//  {
//    path: '',
//    children: [
//      { path: 'settings', component: BlueprintSettingsComponent, canActivate: [DashboardFirstGuard] },
//      { path: 'planning', component: PlanningComponent, canActivate: [DashboardFirstGuard] },
//      { path: 'pricing', component: PricingComponent, canActivate: [DashboardFirstGuard] },
//      { path: 'properties', component: PropertiesComponent, canActivate: [DashboardFirstGuard] },
//      { path: '', component: BlueprintSettingsComponent, canActivate: [DashboardFirstGuard] }
//    ]
//  }
// ];

const routes: Routes = [
  { path: 'blueprint', component: BlueprintComponent, /*children: blueprintChildRoutes,*/ canActivate: [DashboardFirstGuard] },
  { path: '', component: DashboardComponent },
  { path: '**', component: NotFoundComponent }
];

export const Routing = RouterModule.forRoot(routes);

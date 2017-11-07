import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { BlueprintComponent } from '../modules/blueprint/blueprint.component';
import { NotFoundComponent } from './components/not-found.component';
import { DashboardFirstGuard } from './components/dashboardFirst.guard';

import { BlueprintSettingsComponent } from "./../modules/blueprint/components/settings/blueprint-settings.component";
import { BlueprintPlanningComponent } from "./../modules/blueprint/components/planning/blueprint-planning.component";
import { BlueprintProfileComponent } from "./../modules/blueprint/components/profile/blueprint-profile.component";
import { BlueprintPricingComponent } from "./../modules/blueprint/components/pricing/blueprint-pricing.component";

 const blueprintChildRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'settings', component: BlueprintSettingsComponent, canActivate: [DashboardFirstGuard] },
      { path: 'planning', component: BlueprintPlanningComponent, canActivate: [DashboardFirstGuard] },
      { path: 'pricing', component: BlueprintPricingComponent, canActivate: [DashboardFirstGuard] },
      { path: 'profile', component: BlueprintProfileComponent, canActivate: [DashboardFirstGuard] },
      { path: '', component: BlueprintSettingsComponent, canActivate: [DashboardFirstGuard] }
    ]
  }
 ];

const routes: Routes = [
  { path: 'blueprint', component: BlueprintComponent, children: blueprintChildRoutes, canActivate: [DashboardFirstGuard] },
  { path: '', component: DashboardComponent },
  { path: '**', component: NotFoundComponent }
];

export const Routing = RouterModule.forRoot(routes);

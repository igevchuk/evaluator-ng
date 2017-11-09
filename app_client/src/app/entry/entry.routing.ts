import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found.component';
import { DashboardFirstGuard } from './components/dashboardFirst.guard';

import { BlueprintComponent } from './../modules/blueprint/blueprint.component';
import { BlueprintSettingsComponent } from "./../modules/blueprint/components/settings/blueprint-settings.component";
import { BlueprintPlanningComponent } from "./../modules/blueprint/components/planning/blueprint-planning.component";
import { BlueprintProfileComponent } from "./../modules/blueprint/components/profile/blueprint-profile.component";
import { BlueprintPricingComponent } from "./../modules/blueprint/components/pricing/blueprint-pricing.component";

import { CostComponent } from "../modules/cost/cost.component";
import { CostSettingsComponent } from "../modules/cost/components/settings/cost-settings.component";
import { CostOperatingComponent } from "../modules/cost/components/operating/cost-operating.component";
import { CostEvaluateComponent } from "../modules/cost/components/evaluate/cost-evaluate.component";

import { RevenueComponent } from "../modules/revenue/revenue.component";
import { RevenueSettingsComponent } from "../modules/revenue/components/revenue-settings.component";
import { RevenueTaxesComponent } from "../modules/revenue/components/revenue-taxes.component";

import { InvestComponent } from "../modules/invest/invest.component";
import { InvestSettingsComponent } from "../modules/invest/components/invest-settings.component";
import { InvestInvestmentComponent } from "../modules/invest/components/invest-investment.component";

import { FundsComponent } from "../modules/funds/funds.component";
import { FundsSettingsComponent } from "../modules/funds/components/funds-settings.component";
import { FundsLoanComponent } from "../modules/funds/components/funds-loan.component";
import { FundsFeaturesComponent } from "../modules/funds/components/funds-features.component";
import { TemplateFormsComponent } from "../modules/funds/components/common/template-forms.component";
import { ReactiveFormsComponent } from "../modules/funds/components/common/reactive-forms.component";
import { AngularMaterialComponent } from "../modules/funds/components/common/angular-material.component";

import { LiquidityComponent } from "../modules/liquidity/liquidity.component";
import { LiquiditySettingsComponent } from "../modules/liquidity/components/liquidity-settings.component";
import { LiquidityEvaluateComponent } from "../modules/liquidity/components/liquidity-evaluate.component";

import { DepreciationComponent } from "../modules/depreciation/depreciation.component";


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

const costChildRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "settings", component: CostSettingsComponent, canActivate: [DashboardFirstGuard] },
      { path: "operating", component: CostOperatingComponent, canActivate: [DashboardFirstGuard] },
      { path: "evaluate", component: CostEvaluateComponent, canActivate: [DashboardFirstGuard] },
      { path: "", component: CostSettingsComponent, canActivate: [DashboardFirstGuard] }
    ]
  }
 ];

const fundsChildRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "settings", component: FundsSettingsComponent, canActivate: [DashboardFirstGuard] },
      { path: "loan", component: FundsLoanComponent, canActivate: [DashboardFirstGuard] },
      { path: "features", component: FundsFeaturesComponent, canActivate: [DashboardFirstGuard] },
      { path: "templateforms", component: TemplateFormsComponent, canActivate: [DashboardFirstGuard] },
      { path: "reactiveforms", component: ReactiveFormsComponent, canActivate: [DashboardFirstGuard] },
      { path: "material", component: AngularMaterialComponent, canActivate: [DashboardFirstGuard] },
      { path: "", component: FundsSettingsComponent, canActivate: [DashboardFirstGuard] }
    ]
  }
]; 

const investChildRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "settings", component: InvestSettingsComponent, canActivate: [DashboardFirstGuard] },
      { path: "investment", component: InvestInvestmentComponent, canActivate: [DashboardFirstGuard] },
      { path: "", component: InvestSettingsComponent, canActivate: [DashboardFirstGuard] }
    ]
  }
];

const liquidityChildRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "evaluate", component: LiquidityEvaluateComponent, canActivate: [DashboardFirstGuard] },
      { path: "settings", component: LiquiditySettingsComponent, canActivate: [DashboardFirstGuard] },
      { path: "", component: LiquidityEvaluateComponent, canActivate: [DashboardFirstGuard] }
    ]
  }
];

const revenueChildRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "settings", component: RevenueSettingsComponent, canActivate: [DashboardFirstGuard] },
      { path: "taxes", component: RevenueTaxesComponent, canActivate: [DashboardFirstGuard] },
      { path: "", component: RevenueSettingsComponent, canActivate: [DashboardFirstGuard] }
    ]
  }
];

const routes: Routes = [

  { path: "blueprint", component: BlueprintComponent, children: blueprintChildRoutes, canActivate: [DashboardFirstGuard] },
  { path: "blueprint/:task", component: BlueprintComponent, canActivate: [DashboardFirstGuard] },
  { path: "revenue", component: RevenueComponent, children: revenueChildRoutes, canActivate: [DashboardFirstGuard] },
  { path: "revenue/:task", component: RevenueComponent, canActivate: [DashboardFirstGuard] },
  { path: "cost", component: CostComponent, children: costChildRoutes, canActivate: [DashboardFirstGuard] },
  { path: "cost/:task", component: CostComponent, canActivate: [DashboardFirstGuard] },
  { path: "liquidity", component: LiquidityComponent, children: liquidityChildRoutes, canActivate: [DashboardFirstGuard] },
  { path: "liquidity/:task", component: LiquidityComponent, canActivate: [DashboardFirstGuard] },
  { path: "invest", component: InvestComponent, children: investChildRoutes, canActivate: [DashboardFirstGuard] },
  { path: "invest/:task", component: InvestComponent, canActivate: [DashboardFirstGuard] },
  { path: "funds", component: FundsComponent, children: fundsChildRoutes, canActivate: [DashboardFirstGuard] },
  { path: "funds/:task", component: FundsComponent, canActivate: [DashboardFirstGuard] },
  { path: "depreciation", component: DepreciationComponent, canActivate: [DashboardFirstGuard] },

  { path: '', component: DashboardComponent },
  { path: '**', component: NotFoundComponent }
];

export const Routing = RouterModule.forRoot(routes);

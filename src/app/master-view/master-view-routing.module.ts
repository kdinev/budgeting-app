import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { EmployeesComponent } from './employees/employees.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'employees', pathMatch: 'full' }, { path: 'employees', component: EmployeesComponent, data: { text: 'Employees' } }, { path: 'statistics', component: StatisticsComponent, data: { text: 'Statistics' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}

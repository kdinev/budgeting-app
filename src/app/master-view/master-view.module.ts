import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { EmployeesComponent } from './employees/employees.component';
import { IgxComboModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxTreeGridModule, IgxDialogModule, IgxNavbarModule, IgxIconModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    EmployeesComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxComboModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxTreeGridModule,
    IgxDialogModule,
    FormsModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule
  ]
})
export class MasterViewModule {
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxComboModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxTreeGridModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { EmployeesComponent } from './employees.component';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxComboModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxTreeGridModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

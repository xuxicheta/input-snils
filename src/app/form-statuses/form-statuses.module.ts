import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStatusesDirective } from './form-statuses.directive';


@NgModule({
  declarations: [FormStatusesDirective],
  imports: [
    CommonModule
  ],
  exports: [FormStatusesDirective]
})
export class FormStatusesModule { }

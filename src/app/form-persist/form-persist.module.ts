import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPersistDirective } from './form-persist.directive';



@NgModule({
  declarations: [FormPersistDirective],
  imports: [
    CommonModule
  ],
  exports: [FormPersistDirective]
})
export class FormPersistModule { }

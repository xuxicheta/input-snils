import { NgModule } from '@angular/core';
import { FormPersistDirective } from './form-persist.directive';


@NgModule({
  declarations: [FormPersistDirective],
  exports: [FormPersistDirective]
})
export class FormPersistModule { }

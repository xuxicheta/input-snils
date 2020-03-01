import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { InputSnilsComponent } from './input-snils.component';
import { SnilsErrorsPipe } from './snils-errors.pipe';


@NgModule({
  declarations: [InputSnilsComponent, SnilsErrorsPipe],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
  ],
  exports: [InputSnilsComponent],
})
export class InputSnilsModule { }

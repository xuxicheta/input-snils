import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

type ErrorType = 'required' | 'format' | 'snils';

@Pipe({
  name: 'snilsErrors',
  pure: false,
})
export class SnilsErrorsPipe implements PipeTransform {

  transform(control: AbstractControl, errorrType: ErrorType): boolean {
    switch (errorrType) {
      case 'required': return !control.hasError('required');
      case 'format': return !control.hasError('Mask error');
      case 'snils': return control.hasError('Mask error') || !control.hasError('snils');
      default: return false;
    }
  }
}

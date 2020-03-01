import { Directive, HostListener, Input, OnInit, Self } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { FormPersistService } from './form-persist.service';

@Directive({
  selector: 'form[formPersist]', // tslint:disable-line: directive-selector
})
export class FormPersistDirective implements OnInit {
  @Input() formPersist: string;

  constructor(
    private formPersistService: FormPersistService,
    @Self() private formGroup: FormGroupDirective,
  ) { }

  @HostListener('submit')
  onSubmit() {
    this.formPersistService.unregisterForm(this.formPersist);
  }

  ngOnInit() {
    const savedValue = this.formPersistService.registerForm(this.formPersist, this.formGroup.control);
    if (savedValue) {
      this.formGroup.control.markAllAsTouched();
    }
  }
}

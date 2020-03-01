import { Directive, DoCheck, Inject, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { wrapIfChanges } from '../shared/wrap-if-changes.helper';
import { StateValueAccessor } from './state-value-accessor.interface';
import { STATE_VALUE_ACCESSOR } from './state-value-accessor.token';

const noop: (v?: boolean) => void = () => { };

@Directive({
  selector: '[formControlName],[ngModel],[formControl]' // tslint:disable-line: directive-selector
})
export class FormStatusesDirective implements DoCheck, OnInit {
  private setSVATouched = noop;
  private setSVAPristine = noop;

  constructor(
    @Self() private control: NgControl,
    @Self() @Optional()  @Inject(STATE_VALUE_ACCESSOR) private stateValueAccessor: StateValueAccessor,
  ) { }

  ngOnInit() {
    if (this.stateValueAccessor?.setTouchedState) {
      this.setSVATouched = wrapIfChanges(touched => this.stateValueAccessor.setTouchedState(touched));
    }

    if (this.stateValueAccessor?.setPristineState) {
      this.setSVAPristine = wrapIfChanges(pristine => this.stateValueAccessor.setPristineState(pristine));
    }
  }

  ngDoCheck() {
    this.setSVAPristine(this.control.pristine);
    this.setSVATouched(this.control.touched);
  }
}

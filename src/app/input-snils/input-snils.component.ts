import { Component, forwardRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StateValueAccessor } from '../form-statuses/state-value-accessor.interface';
import { STATE_VALUE_ACCESSOR } from '../form-statuses/state-value-accessor.token';
import { snilsValidator } from './snils.validator';

@Component({
  selector: 'app-input-snils',
  templateUrl: './input-snils.component.html',
  styleUrls: ['./input-snils.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSnilsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputSnilsComponent),
      multi: true,
    },
    {
      provide: STATE_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSnilsComponent),
    },
  ]
})
export class InputSnilsComponent implements OnInit, ControlValueAccessor, StateValueAccessor, OnDestroy {
  public mask = '000-000-000 00';
  public formControl = new FormControl('', [snilsValidator]);
  private sub = new Subscription();

  @Input() readonly: boolean;
  @Input() placeholder = 'СНИЛС';
  @Input() tabIndex = 0;
  @Input() required: boolean;

  private onChange = (value: any) => { };
  private onTouched = () => { };
  registerOnChange = (fn: (value: any) => {}) => this.onChange = fn;
  registerOnTouched = (fn: () => {}) => this.onTouched = fn;


  ngOnInit() {
    this.sub = this.linkForm();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private linkForm(): Subscription {
    return this.formControl.valueChanges.subscribe(value => {
      this.onTouched();
      this.onChange(value);
    });
  }

  writeValue(outsideValue: string): void {
    if (outsideValue) {
      this.onTouched();
    }
    this.formControl.setValue(outsideValue, { emitEvent: false });
  }

  setDisabledState(disabled: boolean) {
    disabled
      ? this.formControl.disable()
      : this.formControl.enable();
  }

  validate(): ValidationErrors | null {
    return this.formControl.errors;
  }

  setPristineState(pristine: boolean) {
    pristine
      ? this.formControl.markAsPristine()
      : this.formControl.markAsDirty();

    this.formControl.updateValueAndValidity({ emitEvent: false });
  }

  setTouchedState(touched: boolean) {
    touched
      ? this.formControl.markAsTouched()
      : this.formControl.markAsUntouched();

    this.formControl.updateValueAndValidity({ emitEvent: false });
  }
}

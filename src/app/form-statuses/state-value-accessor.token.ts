import { InjectionToken } from '@angular/core';
import { StateValueAccessor } from './state-value-accessor.interface';

export const STATE_VALUE_ACCESSOR = new InjectionToken<StateValueAccessor>('STATE_VALUE_ACCESSOR');

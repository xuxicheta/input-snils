import { InjectionToken, FactoryProvider } from '@angular/core';

export const WINDOW = new InjectionToken('Window');

export function getWindow() {
  return window;
}

export const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: getWindow,
};

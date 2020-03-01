import { Injectable, Inject } from '@angular/core';
import { WINDOW } from './window.provider';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly prefix = 'snils-input__';

  constructor(
    @Inject(WINDOW) private window: Window,
  ) {}

  public set<T>(key: string, data: T): void {
    this.window.localStorage.setItem(this.prefix + key, JSON.stringify(data));
  }

  public get<T>(key: string): T {
    try {
      return JSON.parse(this.window.localStorage.getItem(this.prefix + key));
    } catch (e) { }

    return null;
  }

  public remove(key: string): void {
    this.window.localStorage.removeItem(this.prefix + key);
  }
}



import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class FormPersistService {
  private subscriptions: Record<string, Subscription> = {};

  constructor(
    private storageService: StorageService,
  ) { }

  /**
   * @returns restored data if exists
   */
  public registerForm(formName: string, form: AbstractControl): any {
    this.subscriptions[formName]?.unsubscribe();
    this.subscriptions[formName] = this.createFormSubscription(formName, form);

    return this.restoreData(formName, form);
  }

  public unregisterForm(formName: string): void {
    this.storageService.remove(formName);

    this.subscriptions[formName]?.unsubscribe();
    delete this.subscriptions[formName];
  }

  public restoreData(formName: string, form: AbstractControl): any {
    const data = this.storageService.get(formName);
    if (data) {
      form.patchValue(data, { emitEvent: false });
    }

    return data;
  }

  private createFormSubscription(formName: string, form: AbstractControl): Subscription {
    return form.valueChanges.pipe(
      debounceTime(500),
    )
      .subscribe(value => {
        this.storageService.set(formName, value);
      });
  }
}

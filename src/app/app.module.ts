import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { FormPersistModule } from './form-persist/form-persist.module';
import { FormStatusesModule } from './form-statuses/form-statuses.module';
import { InputSnilsModule } from './input-snils/input-snils.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormPersistModule,
    FormStatusesModule,
    InputSnilsModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

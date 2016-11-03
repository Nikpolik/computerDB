import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HOME_DECLERATIONS } from './home/index';
import { PARTIALS_DECLARTAIONS } from './partials/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AccountsModule
  ],
  declarations: [
    AppComponent,
    ...PARTIALS_DECLARTAIONS,
    ...HOME_DECLERATIONS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
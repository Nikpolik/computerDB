import { Component } from '@angular/core';
import { Meteor } from 'meteor/meteor'

import template from './login-button.component.html';

@Component({
    selector: 'login-button',
    template
})
export class LoginButton {
  
  private user = null;

  constructor() {
    this.user = Meteor.user();

  }

  login(user, password) {
    Meteor.loginWithPassword(user, password)
  }

  logout() {
    if(this.loggedIn()) {
      Meteor.logout();
    }
  }

  loggedIn() {
    return !!Meteor.user();
  }

}
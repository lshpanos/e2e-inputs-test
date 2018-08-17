import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  firstNameTextInput() {
    return element(by.id('first-name'));
  }

  lastNameTextInput() {
    return element(by.className('last-name'));
  }

  addressTextInput() {
    return element(by.id('address'));
  }

  aCheckBox() {
    return element(by.id('aCheckbox'));
  }

  aList() {
    return element(by.id('aList'));
  }
}

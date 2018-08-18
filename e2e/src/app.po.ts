import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo(route) {
    return browser.get(route);
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

  field1Input() {
    return element(by.id('field1'));
  }

  field2Input() {
    return element(by.id('field2'));
  }

  result() {
    return element(by.id('result'));
  }

  buttonAdd() {
    return element(by.id('button-add'));
  }

  buttonMultiply() {
    return element(by.id('button-multiply'));
  }
}

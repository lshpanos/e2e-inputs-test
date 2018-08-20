import {browser, by, element} from 'protractor';

export class AppPage {

  navigateTo(route) {
    return browser.get(route);
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

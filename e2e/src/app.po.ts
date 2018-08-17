import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFirstNameText() {
    return element(by.id('first-name')).getText();
  }

  getLastNameText() {
    return element(by.className('last-name')).getText();
  }

  getAddressStatus() {
    return element(by.id('address')).getAttribute('disabled');
  }

  getCheckBoxSelection() {
    return element(by.id('isChecked')).isSelected();
  }

  getListSelection() {
    return element(by.id('aList')).getAttribute('value');
  }
}

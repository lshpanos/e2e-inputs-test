import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo(route) {
    return browser.get(route);
  }
}

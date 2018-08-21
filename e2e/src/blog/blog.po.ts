import {browser, by, element} from 'protractor';

export class AppPage {

  navigateTo(route) {
    return browser.get(route);
  }

  postTitle() {
    return element(by.id('post-title'));
  }

  postBody() {
    return element(by.id('post-body'));
  }

  postList() {
    return element(by.css('ul li:last-child'));
  }

  submitButton() {
    return element(by.id('submit-button'));
  }
}

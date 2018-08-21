import {AppPage} from './blog.po';
import {browser} from 'protractor';

describe('Blog\'s result', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('blog');
  });

  it('should get title of post 3', () => {
    page.postTitle().sendKeys('post 3');
    page.postBody().sendKeys('This is a post body dude!');
    page.submitButton().click();
    browser.debugger();
    expect(page.postList().getText()).toContain('post 3');
  });
});

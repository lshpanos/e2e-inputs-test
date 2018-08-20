import {AppPage} from './app.po';

describe('A simple App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

});

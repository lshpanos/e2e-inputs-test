import {AppPage} from './app.po';

describe('A simple App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('First name should be Nick', () => {
    expect(page.getFirstNameText()).toEqual('');
  });

  it('Last name should be Protractor', () => {
    expect(page.getLastNameText()).toEqual('Protractor');
  });

  it('Address input should be disabled', () => {
    expect(page.getAddressStatus()).toBe('true');
  });

  it('Check box should be checked', () => {
    expect(page.getCheckBoxSelection()).toBe(true);
  });

  it('List selection value should be Fair', () => {
    expect(page.getListSelection()).toEqual('Fair');
  });
});

import {AppPage} from './app.po';

describe('A simple App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

  it('First name should be Nick', () => {
    expect(page.firstNameTextInput().getText()).toEqual('');
  });

  it('Last name should be Protractor', () => {
    expect(page.lastNameTextInput().getText()).toEqual('Protractor');
  });

  it('Address input should be disabled', () => {
    expect(page.addressTextInput().getAttribute('disabled')).toBe('true');
  });

  it('Check box should be checked', () => {
    expect(page.aCheckBox().isSelected()).toBe(true);
  });

  it('List selection value should be Fair', () => {
    expect(page.aList().getAttribute('value')).toEqual('Fair');
  });
});

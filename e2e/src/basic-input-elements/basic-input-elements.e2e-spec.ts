import {AppPage} from './basic-input-elements.po';

describe('Basic Input Elements', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

  it('should the first name be Nick', () => {
    page.navigateTo('basic-input-elements');
    expect(page.firstNameTextInput().getText()).toEqual('');
  });

  it('should the last name be Protractor', () => {
    page.navigateTo('basic-input-elements');
    expect(page.lastNameTextInput().getText()).toEqual('Protractor');
  });

  it('should the address input be disabled', () => {
    page.navigateTo('basic-input-elements');
    expect(page.addressTextInput().getAttribute('disabled')).toBe('true');
  });

  it('should the checkbox be checked', () => {
    page.navigateTo('basic-input-elements');
    expect(page.aCheckBox().isSelected()).toBe(true);
  });

  it('should the list selection value be Fair', () => {
    page.navigateTo('basic-input-elements');
    expect(page.aList().getAttribute('value')).toEqual('Fair');
  });
});

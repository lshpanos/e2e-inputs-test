import {AppPage} from './app.po';

describe('A simple App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    // page.navigateTo('/');
  });

  // Component: basic input elements

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

  // Component: calculator

  it('should equal 7 when add 2 + 5', () => {
    page.navigateTo('calculator');
    page.field1Input().sendKeys(2);
    page.field2Input().sendKeys(5);
    page.buttonAdd().click();
    expect(page.result().getAttribute('value')).toEqual('7');
  });

  it('should NOT equal 25 when multiply 4 * 6', () => {
    page.navigateTo('calculator');
    page.field1Input().sendKeys(4);
    page.field2Input().sendKeys(6);
    page.buttonMultiply().click();
    expect(page.result().getAttribute('value')).not.toEqual('25');
  });
});

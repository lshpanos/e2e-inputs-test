import {AppPage} from './app.po';

describe('A simple App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    // page.navigateTo('/');
  });

  // Component: basic input elements

  it('First name should be Nick', () => {
    page.navigateTo('basic-input-elements');
    expect(page.firstNameTextInput().getText()).toEqual('');
  });

  it('Last name should be Protractor', () => {
    page.navigateTo('basic-input-elements');
    expect(page.lastNameTextInput().getText()).toEqual('Protractor');
  });

  it('Address input should be disabled', () => {
    page.navigateTo('basic-input-elements');
    expect(page.addressTextInput().getAttribute('disabled')).toBe('true');
  });

  it('Check box should be checked', () => {
    page.navigateTo('basic-input-elements');
    expect(page.aCheckBox().isSelected()).toBe(true);
  });

  it('List selection value should be Fair', () => {
    page.navigateTo('basic-input-elements');
    expect(page.aList().getAttribute('value')).toEqual('Fair');
  });

  // Component: calculator

  it('Add 2 and 5 should equal 7', () => {
    page.navigateTo('calculator');
    page.field1Input().sendKeys(2);
    page.field2Input().sendKeys(5);
    page.buttonAdd().click();
    expect(page.result().getAttribute('value')).toEqual('7');
  });

  it('Multiply 4 and 6 should NOT equal 25', () => {
    page.navigateTo('calculator');
    page.field1Input().sendKeys(4);
    page.field2Input().sendKeys(6);
    page.buttonMultiply().click();
    expect(page.result().getAttribute('value')).not.toEqual('25');
  });
});

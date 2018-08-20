import {AppPage} from './calculator.po';

describe('Calculator\'s result', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('calculator');
  });

  // Component: calculator

  it('should equal 7 when add 2 + 5', () => {
    page.field1Input().sendKeys(2);
    page.field2Input().sendKeys(5);
    page.buttonAdd().click();
    expect(page.result().getAttribute('value')).toEqual('7');
  });

  it('should NOT equal 25 when multiply 4 * 6', () => {
    page.field1Input().sendKeys(4);
    page.field2Input().sendKeys(6);
    page.buttonMultiply().click();
    expect(page.result().getAttribute('value')).not.toEqual('25');
  });
});

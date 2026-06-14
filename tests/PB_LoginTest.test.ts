import { test, expect } from '@playwright/test';
//import { config } from '../utils/config';
import { PB_LoginPage } from '../pages/PB_LoginPage';
import testData from '../test-data/loginDetails.json';

test('Para Bank inValid Customer Login', async ({ page }) => {

//test01
    const loginPage = new PB_LoginPage(page);

    await loginPage.gotoLoginPage(
    'https://parabank.parasoft.com/parabank/index.htm');

    await page.fill('[name="username"]',testData.loginCredentials.username);
    await page.fill('[name="password"]',testData.loginCredentials.password);

   
    //click on page object model
    //await page.click('text=Login'); //normal way-1

    await page.getByRole('button', { name: 'Log In' }).click(); //pro -way-2
    
    //assertion
    //await expect(page.locator('h2')).toHaveText('Account Services'); // this is working )(1 way )

    //professional assertion
    //await expect(
    //page.getByRole('heading', { name: 'Account Services' })// this is working )(2nd way)
    //).toBeVisible({ timeout: 10000 });

   await expect(page.locator('.error')).toHaveText('The username and password could not be verified.');
    
});




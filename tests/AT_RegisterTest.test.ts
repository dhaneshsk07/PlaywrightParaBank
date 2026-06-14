import { test, expect } from '@playwright/test';
import testData from '../test-data/AT_registerData.json';
import { AT_RegisterPage } from '../pages/AT_RegisterPage';

test('Demo Autoationsite User Registration', async ({ page }) => {

//test01
    const registerPage = new AT_RegisterPage(page);

    await registerPage.gotoRegisterPage(
    'https://demo.automationtesting.in/Register.html');


    await registerPage.enterRegisterDetails(
        testData.custRegDetails.firstname,
        testData.custRegDetails.lastname,
        testData.custRegDetails.address,
        testData.custRegDetails.email,
        testData.custRegDetails.phone, 
        testData.custRegDetails.skill,
        testData.custRegDetails.dobYear,
        testData.custRegDetails.dobMonth,
        testData.custRegDetails.dobDay,
        testData.custRegDetails.country,
        testData.custRegDetails.iconImagePath,
        testData.custRegDetails.password,
        testData.custRegDetails.password

    );


    
    //await expect(page.locator('.error')).toHaveText('The username and password could not be verified.');
    
});




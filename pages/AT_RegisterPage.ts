import { Page, Locator } from '@playwright/test';

export class AT_RegisterPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly email: Locator;
  readonly phoneno: Locator;
  readonly password: Locator;
  readonly confpassword: Locator;
  readonly maleRadio: Locator;
  readonly checkBoxCricket: Locator;
  readonly multiselectwidget: Locator;
  readonly arabic: Locator;
  readonly english: Locator;
  readonly hindi: Locator;
  readonly skillsDropdown: Locator;
  readonly yearOfDob: Locator;
  readonly monthOfDob: Locator;
  readonly dayOfDob: Locator;
  readonly selCountry: Locator;
  readonly submitBtn: Locator;
  readonly imageIcon :Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator('input[placeholder="First Name"]');
    this.lastName = page.locator('input[placeholder="Last Name"]');
    this.address = page.locator('textarea');
    this.email = page.locator('input[ng-model="EmailAdress"]');
    this.phoneno = page.locator('input[type="tel"]');
    this.password = page.locator('input[id="firstpassword"]');
    this.confpassword = page.locator('input[id="secondpassword"]');
    this.maleRadio = page.locator('input[value="Male"]');
    this.checkBoxCricket = page.locator('input[value="Cricket"]');
    this.multiselectwidget = page.locator('#msdd');
    this.arabic = page.locator('//a[text()="Arabic"]');
    this.english = page.locator('//a[text()="English"]');
    this.hindi = page.locator('//a[text()="Hindi"]');
    this.skillsDropdown = page.locator('#Skills');
    this.yearOfDob = page.locator('#yearbox'); //id
    this.monthOfDob = page.locator('select[placeholder="Month"]'); //placeholder
    this.dayOfDob = page.locator('#daybox'); //id
    this.selCountry = page.locator('#country');
    this.imageIcon = page.locator('#imagesrc');
    this.submitBtn = page.locator('#submitbtn');

  }

  //goto register page 
  async gotoRegisterPage(url: string) {
    await this.page.goto(url);
  }

  //Registration Method
  async enterRegisterDetails(firstname: string,
    lastname: string,
    address: string,
    email: string,
    phoneno: string,
    skill: string,
    year: string,
    month: string,
    day: string,
    country: string,
    iconimage :string, 
    password: string,
    confpassword: string,
    ) {

    await this.firstName.fill(firstname);       //----FIRST NAME---
    await this.lastName.fill(lastname);       //----LAST NAME----
    await this.address.fill(address);       //----ADDRESS----
    await this.email.fill(email);       //----EMAIL----
    await this.phoneno.fill(phoneno);       //----PHONE NO-----
    await this.maleRadio.click();       //----GENDER----
    await this.checkBoxCricket.check();       //----HOBBIES----
    await this.selectMultiSelectWidget();       //----LANGUAGE----
    await this.skillsDropdown.selectOption(skill);        //----SKILLS-------
    await this.yearOfDob.selectOption(year);        //----DOB YEAR-------
    await this.monthOfDob.selectOption(month);        //----DOB MONTH------
    await this.dayOfDob.selectOption(day);        //-----DOB DAY-----
    await this.selCountry.selectOption(country);        //----COUNTRY------
    await this.imageIcon.setInputFiles(iconimage);        //----ICON---- 
    await this.password.fill(password);       //----PASSWORD----
    await this.confpassword.fill(confpassword);       //----CONFIRM PASSWORD----
    await this.submitBtn.click();       //----SUMIT BUTTON----

  }
//-------------------------------------------------------------------
  //for language multiselect
  async selectMultiSelectWidget() {

    await this.multiselectwidget.click();
    await this.arabic.click();
    await this.english.click();
    
  }


}
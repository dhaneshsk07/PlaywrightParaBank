import { Page } from '@playwright/test';

export class PB_LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

username = '[name="username"]';
password = '[name="password"]';
loginBtn = 'text=Login';

//goto products page 
  async gotoLoginPage(url : string) {
    await this.page.goto(url);
  }

  //login method
  async validUserLogin(username : string ,password : string){

    await this.page.fill(this.username,username);
    await this.page.fill(this.password,password);
    await this.page.click(this.loginBtn);

  }
 
}
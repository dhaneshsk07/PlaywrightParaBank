import { Page } from '@playwright/test';

export class LC_ProductsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

pageObjectModelLink = 'text=Page Object Model'; //xpath stored here ,locator.getByText
username = '[name="username"]';
password = '[name="password"]';
loginBtn = 'text=Login';

//goto products page 
  async gotoProductsPage(url : string) {
    await this.page.goto(url);
  }

  //login method
  async validUserLogin(username : string ,password : string){

    await this.page.fill(this.username,username);
    await this.page.fill(this.password,password);
    await this.page.click(this.loginBtn);

  }
  async clickOnPageObjectModel() {
    
    await this.page.click(this.pageObjectModelLink);

  }


}
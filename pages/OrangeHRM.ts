import {Page} from "playwright";
import { page } from "../step-definitions/hooks";


export class OrangeHRM{

constructor(private page:Page){};
async navigate(){
  await this.page.goto(process.env.URL!);


}

async login(user_name:string, pass_word:string){ 
 await this.page.getByRole('textbox', { name: 'Username' }).fill(user_name);
  await this.page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await this.page.getByRole('textbox', { name: 'Password' }).fill(pass_word);
  await this.page.getByRole('button', { name: 'Login' }).click();
}

async recruitmentPage(){
  await this.page.getByRole('link', { name: 'Recruitment' }).click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.locator('.oxd-icon.bi-calendar').first().click();
  await this.page.locator('.oxd-calendar-selector-year-selected > .oxd-icon').click();
  await this.page.getByText('Clear').click();
  await this.page.locator('.oxd-icon.bi-calendar').first().click();
  await this.page.getByRole('listitem').filter({ hasText: '2026' }).click();
  
}

async loginButton(){ 
    await this.page.locator('#login').click();
}
async leavePage(){
  await this.page.getByRole('link', { name: 'Leave' }).click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByText('-- Select --').nth(1).click();
  await this.page.getByRole('button', { name: 'Reset' }).click();

}


}
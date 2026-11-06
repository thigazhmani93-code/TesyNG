import 'dotenv/config';
import { Given, When, Then } from "@cucumber/cucumber";
import { OrangeHRM } from "../pages/OrangeHRM";
import { page } from "./hooks";
import { console } from 'inspector/promises';
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(30000);

let orangeHRM: OrangeHRM;

    Given('User launches the application', async function () {
      orangeHRM = new OrangeHRM(page);
    await orangeHRM.navigate();
    });
    
    When('Enter the username and password', async function () {
           const username = process.env.ORANGEHRM_USERNAME;
const password = process.env.ORANGEHRM_PASSWORD;

console.log("Username:", username);
console.log("Password:", password ? "Loaded" : "Missing");

await orangeHRM.login(username!, password!);    
});   
    Then('User works on recruitment module', async function () {
          await orangeHRM.recruitmentPage();
  console.log("User successfully navigated to recruitment module");   
         });  
    Then('User works on leave module', async function () {
           await orangeHRM.leavePage();
           console.log("User successfully navigated to leave module");
         });
       
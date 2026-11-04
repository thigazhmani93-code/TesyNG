import { test, expect } from '@playwright/test';

// test('My first test', async ({ page }) => {
// await page.goto('https://www.naukri.com/');
// const title = await page.title();
// console.log(title);

// });
// test('demo2', async ({ browser }) => {
// const context = await browser.newContext();
// const page = await context.newPage();
// await page.goto('https://www.Indeed.com/');
// await page.waitForTimeout(5000);

// });//h2[text()='See personalized recommendations']
// test('tast 1',async({page})=>{
//   await page.goto("https://www.amazon.in/");
//   await page.waitForTimeout(2000);
//   await page.locator("//h2[text()='See personalized recommendations']").scrollIntoViewIfNeeded();

//   await page.waitForTimeout(4000);

// });
// test('tast 1',async({browser})=>{
//   await page.goto("https://www.amazon.in/");
//   await page.waitForTimeout(2000);
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://www.google.com/");
//   await page.locator("//a[text()='Gmail']").hover();

//   await page.waitForTimeout(4000);

// });
// test('mouse', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://www.google.com/");
//   const gmail=page.locator("//a[text()='Gmail']");
//   await gmail.click({button:'right'});
  

//   await page.waitForTimeout(4000);
// });

// test('mouse', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://www.leafground.com/drag.xhtml");
//   const source=page.locator("//p[text()='Drag to target']");
//   const target=page.locator("//span[text()='Droppable Target']");
//   await source.dragTo(target);
  
//   await page.waitForTimeout(4000);
// });
// test('Keyboard', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://www.google.com/");
//   await page.waitForTimeout(4000);
//   await page.keyboard.type("Playwright");
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(4000);
// });
// test('Keyboard', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://www.google.com/");

//   await page.keyboard.type("Playwright");
//   await page.keyboard.press('Control+A');
 
  
//   await page.waitForTimeout(4000);
// // });
// test('Google search using keyboard', async ({ page }) => {

//   await page.goto('https://www.google.com/');

//   // Type Java in search box
//   await page.keyboard.type("Playwright");
//   await page.waitForTimeout(2000);
//   // Press DOWN arrow 4 times
//   for (let i = 1; i <= 4; i++) {
//     await page.keyboard.press('ArrowDown');
//     await page.waitForTimeout(2000);
//   }

//   // Press ENTER
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(9000);
// });

test('Keyboard', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://adactinhotelapp.com/");
  await page.waitForTimeout(4000);
  const username = page.locator("input[id=username]");
  await username.click();
  await username.fill("ManiShanmugam");
  const password = page.locator("input[id=password]");
  await password.click();
  await password.fill("Arumugan@6");
  const login = page.locator("input[id=login]");
  await login.click();
  await page.waitForTimeout(3000);
  await page.selectOption("#location",{label:"London"});
  await page.selectOption("#hotels",{label:"Hotel Sunshine"});
  await page.selectOption("#room_type",{label:"Standard"});
  await page.selectOption("#room_nos",{label:"1 - One"});
  const search = page.locator("input[id=Submit]");
  await search.click();
  await page.waitForTimeout(3000);
  const radiobutton = page.locator("input[id=radiobutton_0]");
  await radiobutton.click();
  const continue1 = page.locator("input[id=continue]");
  await continue1.click();
  await page.waitForTimeout(3000);
  const confirmpage = page.locator("//td[contains(text(),'Book A Hotel')]");
  console.log(await confirmpage.textContent());
});

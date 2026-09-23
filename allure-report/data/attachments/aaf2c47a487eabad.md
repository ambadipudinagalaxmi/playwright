# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sample.spec.ts >> scrolling
- Location: tests\sample.spec.ts:34:5

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at https://the-internet.herokuapp.com/infinite_scroll
Call log:
  - navigating to "https://the-internet.herokuapp.com/infinite_scroll", waiting until "load"

```

# Test source

```ts
  1  | import{test, expect} from "@playwright/test";
  2  | 
  3  | test("tc1 dropdwon" , async({page})=>{
  4  | await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  5  | await page.waitForTimeout(3000);
  6  | await page.getByPlaceholder("Username").fill('Admin');
  7  | await page.getByPlaceholder("Password").fill('admin123');
  8  | await page.getByRole("button").click();
  9  | await page.getByText("PIM").click();
  10 | //await page.waitForTimeout(1000);
  11 | await page.getByPlaceholder("Type for hints...").first().fill("Ranga");
  12 | await page.waitForTimeout(5000);
  13 | await page.getByRole('option', {name: 'Ranga  Akunuri'}).click();
  14 | await page.locator("input.oxd-input.oxd-input--active").last().fill('20342177');
  15 | await page.locator("div.oxd-select-text.oxd-select-text--active").first().click();
  16 | await page.getByRole('option', {name :'Full-Time Permanent'}).click();
  17 | await page.locator("div.oxd-select-text-input").nth(1).click();
  18 | await page.getByRole('option',{name: 'Current and Past Employees'}).click();
  19 | page.screenshot({path:'screenshort/orangehome.png', fullPage: true});
  20 | await page.waitForTimeout(3000);
  21 | });
  22 | 
  23 | test('tc2 mouseopera', async({page})=>{
  24 | await page.goto('https://demowebshop.tricentis.com/notebooks');
  25 | await page.waitForTimeout(5000);
  26 | await page.getByRole('link', {name:'Computers'}).first().hover();
  27 | await expect(page.getByRole('link', {name: 'Notebooks'}).first()).toBeVisible();
  28 | //await page.getByRole('link', {name: 'Notebooks'}).first().click({button: 'right'});
  29 | await page.waitForTimeout(5000);
  30 | await page.getByAltText('14.1-inch Laptop').dblclick();
  31 | await page.waitForTimeout(5000);
  32 | });
  33 | 
  34 | test("scrolling", async({page})=>{
> 35 |   await page.goto('https://the-internet.herokuapp.com/infinite_scroll');
     |              ^ Error: page.goto: net::ERR_NETWORK_CHANGED at https://the-internet.herokuapp.com/infinite_scroll
  36 |   let pre=0;
  37 |   while(true){
  38 |     const cur=await page.evaluate(()=>{
  39 |     window.scrollTo(0,document.body.scrollHeight);
  40 |     return document.body.scrollHeight;
  41 | });
  42 | console.log("The pre page height", pre);
  43 | console.log("The cur page height", cur);
  44 | if(pre===cur){
  45 |     break;
  46 | }
  47 | pre=cur;
  48 | }
  49 |   console.log("Reached the end of the page");
  50 | })
```
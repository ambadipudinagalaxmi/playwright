import{test, expect} from "@playwright/test";

test("tc1 dropdwon" , async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.waitForTimeout(3000);
await page.getByPlaceholder("Username").fill('Admin');
await page.getByPlaceholder("Password").fill('admin123');
await page.getByRole("button").click();
await page.getByText("PIM").click();
//await page.waitForTimeout(1000);
await page.getByPlaceholder("Type for hints...").first().fill("Ranga");
await page.waitForTimeout(5000);
await page.getByRole('option', {name: 'Ranga  Akunuri'}).click();
await page.locator("input.oxd-input.oxd-input--active").last().fill('20342177');
await page.locator("div.oxd-select-text.oxd-select-text--active").first().click();
await page.getByRole('option', {name :'Full-Time Permanent'}).click();
await page.locator("div.oxd-select-text-input").nth(1).click();
await page.getByRole('option',{name: 'Current and Past Employees'}).click();
page.screenshot({path:'screenshort/orangehome.png', fullPage: true});
await page.waitForTimeout(3000);
});

test('tc2 mouseopera', async({page})=>{
await page.goto('https://demowebshop.tricentis.com/notebooks');
await page.waitForTimeout(5000);
await page.getByRole('link', {name:'Computers'}).first().hover();
await expect(page.getByRole('link', {name: 'Notebooks'}).first()).toBeVisible();
//await page.getByRole('link', {name: 'Notebooks'}).first().click({button: 'right'});
await page.waitForTimeout(5000);
await page.getByAltText('14.1-inch Laptop').dblclick();
await page.waitForTimeout(5000);
});

test("scrolling", async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/infinite_scroll');
  let pre=0;
  while(true){
    const cur=await page.evaluate(()=>{
    window.scrollTo(0,document.body.scrollHeight);
    return document.body.scrollHeight;
});
console.log("The pre page height", pre);
console.log("The cur page height", cur);
if(pre===cur){
    break;
}
pre=cur;
}
  console.log("Reached the end of the page");
})
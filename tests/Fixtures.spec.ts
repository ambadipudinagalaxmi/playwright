import {test, expect, chromium} from '@playwright/test'


test("with out Fixtures Example", async()=>{
    // fixture:
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();


    // Launch Application Url
    await page.goto("https://parabank.parasoft.com/");
    await page.waitForTimeout(3000);
});

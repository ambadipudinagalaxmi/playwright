import {test , expect} from '@playwright/test';
test('amazon', async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByRole('link', {name:"Today's Deals"}).hover()
await page.waitForTimeout(3000);
});
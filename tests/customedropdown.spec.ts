import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder("username").fill("Admin");
await page.getByPlaceholder("password").fill("admin123");
await page.getByRole("button").click();
await page.waitForTimeout(3000);
await page.getByText("PIM").click();
//await page.waitForTimeout(3000);
await page.getByPlaceholder('Type for hints...').first().fill('R');
//await page.waitForTimeout(3000);
await page.getByRole('option', {name:'Ranga  Akunuri'}).click();
//await page.waitForTimeout(2000);
await page.locator(".oxd-input.oxd-input--active").last().fill("20342177");
await page.waitForTimeout(3000);
});


import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder("username").fill("Admin");
await page.getByPlaceholder("password").fill("admin123");
await page.getByRole("button").click();
await page.getByText("Admin").first().click();
await page.locator("input.oxd-input.oxd-input--active").last().fill('karunya');
await page.waitForTimeout(5000);
});

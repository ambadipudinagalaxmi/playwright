import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(5000);
 // await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
 // await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Time' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Lalit sharma' }).locator('i').click();
  await page.locator('div:nth-child(6) > .oxd-table-row > div > div').first().click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByText('Lalit sharma').nth(5).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByText('Lalit sharma').nth(4).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByText('Lalit sharma').nth(3).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByText('Lalit sharma').nth(2).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByText('Lalit sharma').nth(1).click({
    modifiers: ['ControlOrMeta']
  });
  await page.locator('.orangehrm-container').click();
});
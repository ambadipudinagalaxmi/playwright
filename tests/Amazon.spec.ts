import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('#gw-card-layout').click();
  await page.getByRole('link', { name: "Today's Deals"}).click();
  await page.getByRole('link', { name: 'Cobalt Violet' }).click();
  await page.goto('https://www.amazon.in/dp/B0GL873FSD?ref=dlx_deals_dg_dcl_B0GL873FSD_dt_sl10_44_cs&pf_rd_r=ZJ18HJ2H7Z5RRYW7BBAJ&pf_rd_p=a7aaf44c-80aa-4682-b2d0-37bcd5587744&th=1');
  await page.getByRole('radio', { name: '12GB + 512GB' }).click();
  await page.goto('https://www.amazon.in/dp/B0GL8H979W?ref=dlx_deals_dg_dcl_B0GL873FSD_dt_sl10_44_cs&pf_rd_r=ZJ18HJ2H7Z5RRYW7BBAJ&pf_rd_p=a7aaf44c-80aa-4682-b2d0-37bcd5587744&th=1');
  await page.getByRole('button', { name: 'Camera', exact: true }).click();
  await page.getByRole('button', { name: 'Battery' }).click();
  await expect(page.getByRole('button', { name: 'Display' })).toBeVisible();
  await page.getByRole('button', { name: 'Display' }).click();
});
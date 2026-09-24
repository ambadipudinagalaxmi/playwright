# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangeverification.spec.ts >> TC02 Orange HRM Dashboard page verification
- Location: tests\orangeverification.spec.ts:40:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
=========================== logs ===========================
  "commit" event fired
  "domcontentloaded" event fired
  "load" event fired
============================================================
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // Hooks
  4  | test.beforeEach(async ({ page }) => {
  5  |   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
  6  |     waitUntil: "domcontentloaded",
  7  |     timeout: 60000
  8  |   });
  9  | 
  10 |   // Login to the application
  11 |   await page.getByPlaceholder('Username').fill('Admin');
  12 |   await page.getByPlaceholder('Password').fill('admin123');
  13 |   await page.getByRole('button', { name: 'Login' }).click();
  14 | 
  15 |   // Ensure dashboard loads completely
> 16 |   await page.waitForLoadState('networkidle');
     |              ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  17 |   await expect(page.getByRole("heading", { name: /Dashboard/i })).toBeVisible({ timeout: 10000 });
  18 | });
  19 | 
  20 | // Optional logout after each test
  21 | // test.afterEach(async ({ page }) => {
  22 | //   await page.locator('.oxd-userdropdown-img').click();
  23 | //   await page.getByText('Logout').click();
  24 | // });
  25 | 
  26 | // Test Case 01: Dashboard widget verification
  27 | test("TC01 Orange HRM Dashboard widget verification", async ({ page }) => {
  28 |   await page.waitForLoadState('networkidle');
  29 | 
  30 |   // Verify widgets
  31 |   await expect(page.getByText(/My Actions/i)).toBeVisible({ timeout: 10000 });
  32 |   await expect(page.getByText(/Time at Work/i)).toBeVisible();
  33 |   await expect(page.getByText(/Quick Launch/i)).toBeVisible();
  34 |   await expect(page.getByText(/Buzz Latest Posts/i)).toBeVisible();
  35 |   await expect(page.getByText(/Employee Distribution by Sub Unit/i)).toBeVisible();
  36 |   await expect(page.getByText(/Employees on Leave Today/i)).toBeVisible();
  37 | });
  38 | 
  39 | // Test Case 02: Dashboard page menu verification
  40 | test("TC02 Orange HRM Dashboard page verification", async ({ page }) => {
  41 |  // await expect(page.getByRole("heading", { name: /Dashboard/i })).toBeVisible({ timeout: 10000 });
  42 |   await page.waitForTimeout(1000);
  43 | 
  44 |   await expect(page.getByRole("link", { name: "Admin" })).toBeVisible();
  45 |   await expect(page.getByText("PIM")).toBeVisible();
  46 |   await expect(page.getByRole("link", { name: "Leave" })).toBeVisible();
  47 |   await expect(page.getByRole("link", { name: "Time" })).toBeVisible();
  48 |   await expect(page.getByText("Recruitment")).toBeVisible();
  49 |   await expect(page.getByText("My Info")).toBeVisible();
  50 |   await expect(page.getByText("Performance")).toBeVisible();
  51 |   await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  52 |   await expect(page.getByText("Maintenance")).toBeVisible();
  53 |   await expect(page.getByText("Claim")).toBeVisible();
  54 |   await expect(page.getByRole("link", { name: "Buzz" })).toBeVisible();
  55 |   await page.waitForTimeout(1000);
  56 |   await expect(page.getByText("Directory")).toBeVisible();
  57 | });
  58 | 
```
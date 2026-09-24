# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangeverification.spec.ts >> TC02 Orange HRM Dashboard page verification
- Location: tests\orangeverification.spec.ts:37:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Dashboard' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Dashboard' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Dashboard' })

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username": Admin
- text:  Password
- textbox "Password": admin123
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
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
  15 |   // Ensure dashboard loads
  16 |  // await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  17 | });
  18 | 
  19 | //test.afterEach(async ({ page }) => {
  20 |  // await page.locator('.oxd-userdropdown-img').click();
  21 |  // await page.getByText('Logout').click();
  22 | //});
  23 | 
  24 | // Test Case 01: Dashboard widget verification
  25 | test("TC01 Orange HRM Dashboard widget verification", async ({ page }) => {
  26 |   //await page.waitForLoadState('networkidle'); // wait until dashboard fully loads
  27 |   await page.getByRole('link', { name: 'Dashboard' }).click();
  28 |   await expect.soft(page.getByText("My Actions")).toBeVisible();
  29 |   await expect.soft(page.getByText("Time at Work")).toBeVisible();
  30 |   await expect.soft(page.getByText("Quick Launch")).toBeVisible();
  31 |   await expect.soft(page.getByText("Buzz Latest Posts")).toBeVisible();
  32 |   await expect.soft(page.getByText("Employee Distribution by Sub Unit")).toBeVisible();
  33 |   await expect.soft(page.getByText("Employees on Leave Today")).toBeVisible();
  34 | });
  35 | 
  36 | // Test Case 02: Dashboard page menu verification
  37 | test("TC02 Orange HRM Dashboard page verification", async ({ page }) => {
> 38 |  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
     |                                                                 ^ Error: expect(locator).toBeVisible() failed
  39 |   page.waitForTimeout(1000);
  40 |   await expect.soft(page.getByRole("link", { name: "Admin" })).toBeVisible();
  41 |   await expect.soft(page.getByText("PIM")).toBeVisible();
  42 |   await expect.soft(page.getByRole("link", { name: "Leave" })).toBeVisible();
  43 |   await expect.soft(page.getByRole("link", { name: "Time" })).toBeVisible();
  44 |   await expect.soft(page.getByText("Recruitment")).toBeVisible();
  45 |   await expect.soft(page.getByText("My Info")).toBeVisible();
  46 |   await expect.soft(page.getByText("Performance")).toBeVisible();
  47 |   await expect.soft(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  48 |   await expect.soft(page.getByText("Maintenance")).toBeVisible();
  49 |   await expect.soft(page.getByText("Claim")).toBeVisible();
  50 |   await expect.soft(page.getByRole("link", { name: "Buzz" })).toBeVisible();
  51 |   await page.waitForTimeout(1000);
  52 |   await expect.soft(page.getByText("Directory")).toBeVisible();
  53 | });
```
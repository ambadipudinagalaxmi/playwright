# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangeverification.spec.ts >> TC01 Orange HRM Dashboard widget verification
- Location: tests\orangeverification.spec.ts:25:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('My Actions')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" getByText('My Actions') with timeout 5000ms
  - waiting for getByText('My Actions')

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: manda user
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - button "" [ref=f2e133] [cursor=pointer]
  - generic [ref=f2e135]:
    - generic [ref=f2e137]:
      - generic [ref=f2e139]:
        - generic [ref=f2e141]:
          - generic [ref=f2e142]: 
          - paragraph [ref=f2e143]: Time at Work
        - separator [ref=f2e144]
      - generic [ref=f2e148]:
        - generic [ref=f2e150]:
          - generic [ref=f2e151]: 
          - paragraph [ref=f2e152]: My Actions
        - separator [ref=f2e153]
        - generic [ref=f2e155]:
          - img "No Content" [ref=f2e156]
          - paragraph [ref=f2e157]: No Pending Actions to Perform
      - generic [ref=f2e159]:
        - generic [ref=f2e161]:
          - generic [ref=f2e162]: 
          - paragraph [ref=f2e163]: Quick Launch
        - separator [ref=f2e164]
      - generic [ref=f2e168]:
        - generic [ref=f2e170]:
          - generic [ref=f2e171]: 
          - paragraph [ref=f2e172]: Buzz Latest Posts
        - separator [ref=f2e173]
      - generic [ref=f2e177]:
        - generic [ref=f2e178]:
          - paragraph [ref=f2e183]: Employees on Leave Today
          - generic [ref=f2e184] [cursor=pointer]: 
        - separator [ref=f2e185]
      - generic [ref=f2e189]:
        - generic [ref=f2e191]:
          - generic [ref=f2e192]: 
          - paragraph [ref=f2e193]: Employee Distribution by Sub Unit
        - separator [ref=f2e194]
      - generic [ref=f2e198]:
        - generic [ref=f2e200]:
          - generic [ref=f2e201]: 
          - paragraph [ref=f2e202]: Employee Distribution by Location
        - separator [ref=f2e203]
    - generic [ref=f2e206]:
      - paragraph [ref=f2e207]: OrangeHRM OS 5.9
      - paragraph [ref=f2e208]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e209] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
> 28 |   await expect.soft(page.getByText("My Actions")).toBeVisible();
     |                                                   ^ Error: expect(locator).toBeVisible() failed
  29 |   await expect.soft(page.getByText("Time at Work")).toBeVisible();
  30 |   await expect.soft(page.getByText("Quick Launch")).toBeVisible();
  31 |   await expect.soft(page.getByText("Buzz Latest Posts")).toBeVisible();
  32 |   await expect.soft(page.getByText("Employee Distribution by Sub Unit")).toBeVisible();
  33 |   await expect.soft(page.getByText("Employees on Leave Today")).toBeVisible();
  34 | });
  35 | 
  36 | // Test Case 02: Dashboard page menu verification
  37 | test("TC02 Orange HRM Dashboard page verification", async ({ page }) => {
  38 |  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
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
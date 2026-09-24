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

Locator:  locator('.oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module')
Expected: visible
Received: undefined
Timeout:  5000ms

Call log:
  - Expect "soft toBeVisible" locator('.oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module') with timeout 5000ms
  - waiting for locator('.oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module')

```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Admin' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" getByRole('link', { name: 'Admin' }) with timeout 5000ms
  - waiting for getByRole('link', { name: 'Admin' })
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: Demo Source
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
      - generic [ref=f1e148]:
        - generic [ref=f1e150]:
          - generic [ref=f1e151]: 
          - paragraph [ref=f1e152]: My Actions
        - separator [ref=f1e153]
        - generic [ref=f1e155]:
          - img "No Content" [ref=f1e156]
          - paragraph [ref=f1e157]: No Pending Actions to Perform
      - generic [ref=f1e159]:
        - generic [ref=f1e161]:
          - generic [ref=f1e162]: 
          - paragraph [ref=f1e163]: Quick Launch
        - separator [ref=f1e164]
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: Buzz Latest Posts
        - separator [ref=f1e173]
      - generic [ref=f1e177]:
        - generic [ref=f1e178]:
          - paragraph [ref=f1e183]: Employees on Leave Today
          - generic [ref=f1e184] [cursor=pointer]: 
        - separator [ref=f1e185]
      - generic [ref=f1e189]:
        - generic [ref=f1e191]:
          - generic [ref=f1e192]: 
          - paragraph [ref=f1e193]: Employee Distribution by Sub Unit
        - separator [ref=f1e194]
      - generic [ref=f1e198]:
        - generic [ref=f1e200]:
          - generic [ref=f1e201]: 
          - paragraph [ref=f1e202]: Employee Distribution by Location
        - separator [ref=f1e203]
    - generic [ref=f1e206]:
      - paragraph [ref=f1e207]: OrangeHRM OS 5.9
      - paragraph [ref=f1e208]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e209] [cursor=pointer]:
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
  26 |   await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  27 |   await page.waitForTimeout(1000);
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
  38 |   await expect.soft(page.locator(".oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module")).toBeVisible();
  39 |   page.waitForTimeout(1000);
> 40 |   await expect.soft(page.getByRole("link", { name: "Admin" })).toBeVisible();
     |                                                                ^ Error: expect(locator).toBeVisible() failed
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
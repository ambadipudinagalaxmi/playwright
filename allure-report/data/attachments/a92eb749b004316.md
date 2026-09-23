# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangeverification.spec.ts >> TC01 Orange HRM Dashboard widget verification
- Location: tests\orangeverification.spec.ts:25:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
=========================== logs ===========================
  "commit" event fired
  "domcontentloaded" event fired
  "load" event fired
============================================================
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
        - generic [ref=f1e166]:
          - generic [ref=f1e167]:
            - button "Assign Leave" [ref=f1e168] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e171]:
              - paragraph [ref=f1e172]: Assign Leave
          - generic [ref=f1e173]:
            - button "Leave List" [ref=f1e174] [cursor=pointer]
            - generic "Leave List" [ref=f1e181]:
              - paragraph [ref=f1e182]: Leave List
          - generic [ref=f1e183]:
            - button "Timesheets" [ref=f1e184] [cursor=pointer]
            - generic "Timesheets" [ref=f1e190]:
              - paragraph [ref=f1e191]: Timesheets
          - generic [ref=f1e192]:
            - button "Apply Leave" [ref=f1e193] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e196]:
              - paragraph [ref=f1e197]: Apply Leave
          - generic [ref=f1e198]:
            - button "My Leave" [ref=f1e199] [cursor=pointer]
            - generic "My Leave" [ref=f1e204]:
              - paragraph [ref=f1e205]: My Leave
          - generic [ref=f1e206]:
            - button "My Timesheet" [ref=f1e207] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e210]:
              - paragraph [ref=f1e211]: My Timesheet
      - generic [ref=f1e213]:
        - generic [ref=f1e215]:
          - generic [ref=f1e216]: 
          - paragraph [ref=f1e217]: Buzz Latest Posts
        - separator [ref=f1e218]
        - generic [ref=f1e220]:
          - generic [ref=f1e221]:
            - generic [ref=f1e222] [cursor=pointer]:
              - img "profile picture" [ref=f1e224]
              - generic [ref=f1e225]:
                - paragraph [ref=f1e226]: Demo Open Source
                - paragraph [ref=f1e227]: 2026-23-09 06:58 PM
            - separator [ref=f1e228]
            - paragraph [ref=f1e229]: Automated Playwright test status post - 1334
          - generic [ref=f1e230]:
            - generic [ref=f1e231] [cursor=pointer]:
              - img "profile picture" [ref=f1e233]
              - generic [ref=f1e234]:
                - paragraph [ref=f1e235]: Demo Open Source
                - paragraph [ref=f1e236]: 2026-23-09 06:53 PM
            - separator [ref=f1e237]
            - paragraph [ref=f1e238]: Automation test post - mue4w4a1qigr
          - generic [ref=f1e239]:
            - generic [ref=f1e240] [cursor=pointer]:
              - img "profile picture" [ref=f1e242]
              - generic [ref=f1e243]:
                - paragraph [ref=f1e244]: Demo Open Source
                - paragraph [ref=f1e245]: 2026-23-09 06:49 PM
            - separator [ref=f1e246]
            - paragraph [ref=f1e247]: Automated Playwright test status post - 2807
          - generic [ref=f1e248]:
            - generic [ref=f1e249] [cursor=pointer]:
              - img "profile picture" [ref=f1e251]
              - generic [ref=f1e252]:
                - paragraph [ref=f1e253]: Demo Open Source
                - paragraph [ref=f1e254]: 2026-23-09 06:45 PM
            - separator [ref=f1e255]
            - paragraph [ref=f1e256]: Automated status update with AI Self Healing!
          - generic [ref=f1e257]:
            - generic [ref=f1e258] [cursor=pointer]:
              - img "profile picture" [ref=f1e260]
              - generic [ref=f1e261]:
                - paragraph [ref=f1e262]: Demo Open Source
                - paragraph [ref=f1e263]: 2026-23-09 06:44 PM
            - separator [ref=f1e264]
            - paragraph [ref=f1e265]: Automated status update with AI Self Healing!
      - generic [ref=f1e267]:
        - generic [ref=f1e268]:
          - paragraph [ref=f1e273]: Employees on Leave Today
          - generic [ref=f1e274] [cursor=pointer]: 
        - separator [ref=f1e275]
        - generic [ref=f1e277]:
          - img "profile picture" [ref=f1e279]
          - generic [ref=f1e280]:
            - paragraph [ref=f1e281]: John Doe
            - paragraph [ref=f1e282]: CAN - Personal
          - paragraph [ref=f1e283]: "0414"
      - generic [ref=f1e285]:
        - generic [ref=f1e287]:
          - generic [ref=f1e288]: 
          - paragraph [ref=f1e289]: Employee Distribution by Sub Unit
        - separator [ref=f1e290]
        - list [ref=f1e295]:
          - listitem [ref=f1e296] [cursor=pointer]:
            - generic "Engineering" [ref=f1e298]
          - listitem [ref=f1e299] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e301]
          - listitem [ref=f1e302] [cursor=pointer]:
            - generic "Administration" [ref=f1e304]
          - listitem [ref=f1e305] [cursor=pointer]:
            - generic "Client Services" [ref=f1e307]
          - listitem [ref=f1e308] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e310]
      - generic [ref=f1e312]:
        - generic [ref=f1e314]:
          - generic [ref=f1e315]: 
          - paragraph [ref=f1e316]: Employee Distribution by Location
        - separator [ref=f1e317]
    - generic [ref=f1e320]:
      - paragraph [ref=f1e321]: OrangeHRM OS 5.9
      - paragraph [ref=f1e322]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e323] [cursor=pointer]:
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
> 26 |   await page.waitForLoadState('networkidle'); // wait until dashboard fully loads
     |              ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  27 |   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 10000 });
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
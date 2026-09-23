# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangeverification.spec.ts >> TC02 Orange HRM Dashboard page verification
- Location: tests\orangeverification.spec.ts:37:5

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
              - paragraph [ref=f1e127]: manda user
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
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 0h 0m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Sep 21 - Sep 27
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 0m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e175]:
          - generic [ref=f1e176]:
            - button [ref=f1e177] [cursor=pointer]
            - paragraph [ref=f1e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f1e184]:
            - button [ref=f1e185] [cursor=pointer]
            - paragraph [ref=f1e194] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f1e196]:
        - generic [ref=f1e198]:
          - generic [ref=f1e199]: 
          - paragraph [ref=f1e200]: Quick Launch
        - separator [ref=f1e201]
        - generic [ref=f1e203]:
          - generic [ref=f1e204]:
            - button "Assign Leave" [ref=f1e205] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e208]:
              - paragraph [ref=f1e209]: Assign Leave
          - generic [ref=f1e210]:
            - button "Leave List" [ref=f1e211] [cursor=pointer]
            - generic "Leave List" [ref=f1e218]:
              - paragraph [ref=f1e219]: Leave List
          - generic [ref=f1e220]:
            - button "Timesheets" [ref=f1e221] [cursor=pointer]
            - generic "Timesheets" [ref=f1e227]:
              - paragraph [ref=f1e228]: Timesheets
          - generic [ref=f1e229]:
            - button "Apply Leave" [ref=f1e230] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e233]:
              - paragraph [ref=f1e234]: Apply Leave
          - generic [ref=f1e235]:
            - button "My Leave" [ref=f1e236] [cursor=pointer]
            - generic "My Leave" [ref=f1e241]:
              - paragraph [ref=f1e242]: My Leave
          - generic [ref=f1e243]:
            - button "My Timesheet" [ref=f1e244] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e247]:
              - paragraph [ref=f1e248]: My Timesheet
      - generic [ref=f1e250]:
        - generic [ref=f1e252]:
          - generic [ref=f1e253]: 
          - paragraph [ref=f1e254]: Buzz Latest Posts
        - separator [ref=f1e255]
      - generic [ref=f1e259]:
        - generic [ref=f1e260]:
          - paragraph [ref=f1e265]: Employees on Leave Today
          - generic [ref=f1e266] [cursor=pointer]: 
        - separator [ref=f1e267]
      - generic [ref=f1e271]:
        - generic [ref=f1e273]:
          - generic [ref=f1e274]: 
          - paragraph [ref=f1e275]: Employee Distribution by Sub Unit
        - separator [ref=f1e276]
      - generic [ref=f1e280]:
        - generic [ref=f1e282]:
          - generic [ref=f1e283]: 
          - paragraph [ref=f1e284]: Employee Distribution by Location
        - separator [ref=f1e285]
    - generic [ref=f1e288]:
      - paragraph [ref=f1e289]: OrangeHRM OS 5.9
      - paragraph [ref=f1e290]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e291] [cursor=pointer]:
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
  28 |   await expect(page.getByText("My Actions")).toBeVisible({ timeout: 10000 });
  29 |   await expect(page.getByText("Time at Work")).toBeVisible();
  30 |   await expect(page.getByText("Quick Launch")).toBeVisible();
  31 |   await expect(page.getByText("Buzz Latest Posts")).toBeVisible();
  32 |   await expect(page.getByText("Employee Distribution by Sub Unit")).toBeVisible();
  33 |   await expect(page.getByText("Employees on Leave Today")).toBeVisible();
  34 | });
  35 | 
  36 | // Test Case 02: Dashboard page menu verification
  37 | test("TC02 Orange HRM Dashboard page verification", async ({ page }) => {
  38 |   await expect(page.getByRole("heading", { name: /Dashboard/i })).toBeVisible({ timeout: 10000 });
  39 |   await page.waitForTimeout(1000);
  40 | 
  41 |   await expect(page.getByRole("link", { name: "Admin" })).toBeVisible();
  42 |   await expect(page.getByText("PIM")).toBeVisible();
  43 |   await expect(page.getByRole("link", { name: "Leave" })).toBeVisible();
  44 |   await expect(page.getByRole("link", { name: "Time" })).toBeVisible();
  45 |   await expect(page.getByText("Recruitment")).toBeVisible();
  46 |   await expect(page.getByText("My Info")).toBeVisible();
  47 |   await expect(page.getByText("Performance")).toBeVisible();
  48 |   await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  49 |   await expect(page.getByText("Maintenance")).toBeVisible();
  50 |   await expect(page.getByText("Claim")).toBeVisible();
  51 |   await expect(page.getByRole("link", { name: "Buzz" })).toBeVisible();
  52 |   await page.waitForTimeout(1000);
  53 |   await expect(page.getByText("Directory")).toBeVisible();
  54 | });
  55 | 
```
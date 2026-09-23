# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tableverification.spec.ts >> TC table
- Location: tests\tableverification.spec.ts:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div.oxd-table').locator('div.oxd-table-body').locator('div.oxd-table-card.div.oxd-table-row.oxd-table-row--with-border').first().locator('button.oxd-button.oxd-button--medium.oxd-button--text.oxd-table-cell-action-space').first()

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
          - generic [ref=f2e113]:
            - heading "Time" [level=6] [ref=f2e114]
            - heading "/ Timesheets" [level=6] [ref=f2e115]
        - link [ref=f2e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e118] [cursor=pointer]
        - list [ref=f2e124]:
          - listitem [ref=f2e125]:
            - generic [ref=f2e126] [cursor=pointer]:
              - img "profile picture" [ref=f2e127]
              - paragraph [ref=f2e128]: Demo Source
              - generic [ref=f2e129]: 
      - navigation "Topbar Menu" [ref=f2e131]:
        - list [ref=f2e132]:
          - listitem [ref=f2e133] [cursor=pointer]:
            - generic [ref=f2e134]:
              - text: Timesheets
              - generic [ref=f2e135]: 
          - listitem [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]:
              - text: Attendance
              - generic [ref=f2e138]: 
          - listitem [ref=f2e139] [cursor=pointer]:
            - generic [ref=f2e140]:
              - text: Reports
              - generic [ref=f2e141]: 
          - listitem [ref=f2e142] [cursor=pointer]:
            - generic [ref=f2e143]:
              - text: Project Info
              - generic [ref=f2e144]: 
          - button "" [ref=f2e146] [cursor=pointer]
  - generic [ref=f2e148]:
    - generic [ref=f2e150]:
      - generic [ref=f2e151]:
        - heading "Select Employee" [level=6] [ref=f2e152]
        - separator [ref=f2e153]
        - generic [ref=f2e154]:
          - generic [ref=f2e158]:
            - generic [ref=f2e159]: Employee Name*
            - textbox "Type for hints..." [ref=f2e164]
          - separator [ref=f2e165]
          - generic [ref=f2e166]:
            - paragraph [ref=f2e167]: "* Required"
            - button "View" [ref=f2e168] [cursor=pointer]
      - generic [ref=f2e169]:
        - heading "Timesheets Pending Action" [level=6] [ref=f2e171]
        - generic [ref=f2e172]:
          - separator [ref=f2e173]
          - generic [ref=f2e174]: (3) Records Found
        - table [ref=f2e177]:
          - rowgroup [ref=f2e178]:
            - row [ref=f2e179]:
              - columnheader "Employee Name" [ref=f2e180]
              - columnheader "Timesheet Period" [ref=f2e181]
              - columnheader "Actions" [ref=f2e182]
          - rowgroup [ref=f2e183]:
            - row [ref=f2e185]:
              - cell "Demo Open Source" [ref=f2e186]
              - cell "2023-16-01 - 2023-22-01" [ref=f2e188]
              - cell [ref=f2e190]:
                - button "View" [ref=f2e192] [cursor=pointer]
            - row [ref=f2e194]:
              - cell "Demo Open Source" [ref=f2e195]
              - cell "2022-15-08 - 2022-21-08" [ref=f2e197]
              - cell [ref=f2e199]:
                - button "View" [ref=f2e201] [cursor=pointer]
            - row [ref=f2e203]:
              - cell "Demo Open Source" [ref=f2e204]
              - cell "2020-14-09 - 2020-20-09" [ref=f2e206]
              - cell [ref=f2e208]:
                - button "View" [ref=f2e210] [cursor=pointer]
    - generic [ref=f2e212]:
      - paragraph [ref=f2e213]: OrangeHRM OS 5.9
      - paragraph [ref=f2e214]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e215] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import {test, expect } from "@playwright/test";
  2  | test("TC table", async({page})=>{
  3  | await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  4  | await page.waitForTimeout(5000);
  5  | await page.getByPlaceholder("Username").fill("Admin");
  6  | await page.getByPlaceholder("Password").fill("admin123");
  7  | await page.getByRole("button", {name:"Login"}).click();
  8  | await page.getByText("Time").first().click();
  9  | //await page.waitForTimeout(2000);
  10 | const table=page.locator("div.oxd-table");
  11 | const thead=table.locator("div.oxd-table-header");
  12 | const theadrows =thead.locator("div.oxd-table-row.oxd-table-row--with-border")
  13 | const theadCol =theadrows.locator('div.oxd-table-header-cell.oxd-padding-cell.oxd-table-th');
  14 |    
  15 |     const tbody = table.locator('div.oxd-table-body');
  16 |     const rows = tbody.locator('div.oxd-table-card.div.oxd-table-row.oxd-table-row--with-border');
  17 |     const columns = rows.locator('div.oxd-table-cell.oxd-padding-cell');
  18 |     // Capture Row Count and Column Count
  19 |    // await page.waitForTimeout(1000);
  20 |     await table.hover();
  21 |     await page.waitForTimeout(5000);
  22 |     await page.mouse.wheel(0, 1000);
  23 | 
  24 | 
  25 |     const rowCount = await rows.count();
  26 |     const columnCount = await columns.count();
  27 |     const headercolCount = await theadCol.count();
  28 |     const headerrowsCount = await theadrows.count();
  29 | 
  30 | 
  31 |     console.log(`Row Count: ${rowCount}`);
  32 |     console.log(`Column Count: ${columnCount}`);
  33 |     console.log(`Header Column Count: ${headercolCount}`);
  34 |     console.log(`Header Rows Count: ${headerrowsCount}`);
  35 | 
  36 | 
  37 |     // click on view button in first row actions column
  38 |     const firstRow = rows.nth(0);
  39 |     // const actionCell = firstRow.locator('div.oxd-table-cell.oxd-table-cell--actions');
  40 |     const viewButton = firstRow.locator('button.oxd-button.oxd-button--medium.oxd-button--text.oxd-table-cell-action-space').nth(0);
  41 |     await page.waitForTimeout(3000);
> 42 |    await viewButton.click();
     |                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  43 |       //await page.waitForTimeout(5000);
  44 | });
  45 | 
  46 | 
```
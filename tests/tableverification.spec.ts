import {test, expect } from "@playwright/test";
test("TC table", async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.waitForTimeout(5000);
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole("button", {name:"Login"}).click();
await page.getByText("Time").first().click();
//await page.waitForTimeout(2000);
const table=page.locator("div.oxd-table");
const thead=table.locator("div.oxd-table-header");
const theadrows =thead.locator("div.oxd-table-row.oxd-table-row--with-border")
const theadCol =theadrows.locator('div.oxd-table-header-cell.oxd-padding-cell.oxd-table-th');
   
    const tbody = table.locator('div.oxd-table-body');
    const rows = tbody.locator('div.oxd-table-card.div.oxd-table-row.oxd-table-row--with-border');
    const columns = rows.locator('div.oxd-table-cell.oxd-padding-cell');
    // Capture Row Count and Column Count
   // await page.waitForTimeout(1000);
    await table.hover();
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0, 1000);


    const rowCount = await rows.count();
    const columnCount = await columns.count();
    const headercolCount = await theadCol.count();
    const headerrowsCount = await theadrows.count();


    console.log(`Row Count: ${rowCount}`);
    console.log(`Column Count: ${columnCount}`);
    console.log(`Header Column Count: ${headercolCount}`);
    console.log(`Header Rows Count: ${headerrowsCount}`);


    // click on view button in first row actions column
    const firstRow = rows.nth(0);
    // const actionCell = firstRow.locator('div.oxd-table-cell.oxd-table-cell--actions');
    const viewButton = firstRow.locator('button.oxd-button.oxd-button--medium.oxd-button--text.oxd-table-cell-action-space').nth(0);
    await page.waitForTimeout(3000);
   await viewButton.click();
      //await page.waitForTimeout(5000);
});


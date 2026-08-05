import{ test, expect } from "@playwright/test";
test("tc1 tableverification", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
await page.getByRole("link", {name: "Books"}).first().click();
await page.waitForTimeout(3000);
for (let i = 0; i < 3; i++) {
    await page.locator("input.button-2.product-box-add-to-cart-button").nth(i).click();
    const countqty=`(${i+1})`;
    await expect(page.locator("Span.cart-qty")).toHaveText(countqty);
await page.waitForTimeout(3000);
}
 await page.locator("span.cart-label").first().click();
await page.waitForTimeout(3000);
const rowcount=await page.locator("table.cart tbody tr").count();
console.log("count of rows", rowcount);
await page.waitForTimeout(3000);
for (let i=0; i<rowcount; i++){
const itemName=await page.locator("table.cart tbody tr").nth(i).locator("td").nth(2).innerText();
console.log(`Item ${i+1}:`, itemName);
}
})

import { test, expect } from "@playwright/test";
test("TC1select dropdown", async({page})=>{
 await page.goto("https://demowebshop.tricentis.com/");
 await page.getByRole("link", {name: 'Books'}).first().click();
 //await page.waitForTimeout(3000);
 //await page.getByRole("combobox").nth(1).selectOption({label: "Price: High to Low"});
 //await page.locator('#products-orderby').selectOption({label: "Price: Low to High"});
 //await page.locator("#products-orderby").selectOption({value: "https://demowebshop.tricentis.com/books?orderby=15"});
 await page.locator('#products-orderby').selectOption({index: 2});
});


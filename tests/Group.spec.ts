import{test , expect} from "@playwright/test"
test.describe('grouping',()=>{
test('tc1-sbi page', async({page})=>{
await page.goto('https://onlinesbi.sbi.bank.in/');
await page.waitForTimeout(3000);
});
test('tc2-hdfc page', async({page})=>{
await page.goto('https://www.hdfc.bank.in/');
await page.waitForTimeout(3000);
});
test('tc3-icici page', async({page})=>{
await page.goto('https://www.icici.bank.in/nri-banking');
await page.waitForTimeout(3000);
});
});
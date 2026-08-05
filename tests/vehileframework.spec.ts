import{test, expect} from"@playwright/test";
import { Homepage } from "../pages/vehileincproject"; // adjust path if needed

test.describe("Homepage navigation tests", ()=> {
  
  test("Navigate to Automobile page", async({ page }) => {
    const home = new Homepage(page);
    await home.goto();
    await home.auto();
    await page.waitForTimeout(3000);
  });
  test("Navigate to truck page", async({page})=>{
const home =new Homepage(page);
await home.goto();
await home.tru();
await page.waitForTimeout(3000);
  });
  test("Navigate to motorcycle page", async({page})=>{
const home=new Homepage(page);
await home.goto();
await home.motor();
await page.waitForTimeout(3000);
  });
  test("Navigate to camper page", async({page})=>{
const home =new Homepage(page);
await home.goto();
await home.cam();
await page.waitForTimeout(3000);
  });
});

import { Page, Locator } from "@playwright/test";

export class AutomobileVerification {
  readonly page: Page;
  readonly automobile: Locator;

  constructor(page: Page) {
    this.page = page;
    this.automobile = page.getByRole("link", { name: "Automobile" });
  }

  async goto() {
    await this.page.goto("https://sampleapp.tricentis.com/101/index.php", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  }

  async auto() {
    await this.automobile.first().click();
  }
 async fillAutomobileForm() {
    await this.page.locator("#make").selectOption("Audi");
    await this.page.waitForTimeout(3000);
    await this.page.locator("#engineperformance").fill("3000");
    await this.page.locator("#dateofmanufacture").fill("07/05/2003");
    await this.page.locator("#numberofseats").selectOption("4");
    await this.page.locator("#fuel").selectOption("Petrol");
    await this.page.locator("#listprice").fill("8000");
    await this.page.waitForTimeout(3000);
    await this.page.locator('#licenseplatenumber').fill('TS08 N 2204');
    await this.page.locator('#annualmileage').fill('5000');
    await this.page.locator('#nextenterinsurantdata').click();
    await this.page.waitForTimeout(3000);
  }
  async fillinsurantdata(){

  }
  
}

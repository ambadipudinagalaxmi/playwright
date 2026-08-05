import { test, expect } from "@playwright/test";
import { AutomobileVerification } from "../pages/automobile"; // adjust path if needed


  test("Fill Automobile form successfully", async ({ page }) => {
    const autoPage = new AutomobileVerification(page);

    // Navigate to homepage
    await autoPage.goto();

    // Click Automobile link
    await autoPage.auto();

    // Fill Automobile form
    await autoPage.fillAutomobileForm();

});

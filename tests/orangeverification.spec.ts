import { test, expect } from '@playwright/test';

// Hooks
test.beforeEach(async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
    waitUntil: "domcontentloaded",
    timeout: 60000
  });

  // Login to the application
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Ensure dashboard loads
 // await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});

test.afterEach(async ({ page }) => {
  await page.locator('.oxd-userdropdown-img').click();
  await page.getByText('Logout').click();
});

// Test Case 01: Dashboard widget verification
test("TC01 Orange HRM Dashboard widget verification", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect.soft(page.getByText("My Actions")).toBeVisible();
  await expect.soft(page.getByText("Time at Work")).toBeVisible();
  await expect.soft(page.getByText("Quick Launch")).toBeVisible();
  await expect.soft(page.getByText("Buzz Latest Posts")).toBeVisible();
  await expect.soft(page.getByText("Employee Distribution by Sub Unit")).toBeVisible();
  await expect.soft(page.getByText("Employees on Leave Today")).toBeVisible();
});

// Test Case 02: Dashboard page menu verification
test("TC02 Orange HRM Dashboard page verification", async ({ page }) => {
  await expect.soft(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect.soft(page.getByRole("link", { name: "Admin" })).toBeVisible();
  await expect.soft(page.getByText("PIM")).toBeVisible();
  await expect.soft(page.getByRole("link", { name: "Leave" })).toBeVisible();
  await expect.soft(page.getByRole("link", { name: "Time" })).toBeVisible();
  await expect.soft(page.getByText("Recruitment")).toBeVisible();
  await expect.soft(page.getByText("My Info")).toBeVisible();
  await expect.soft(page.getByText("Performance")).toBeVisible();
  await expect.soft(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  await expect.soft(page.getByText("Maintenance")).toBeVisible();
  await expect.soft(page.getByText("Claim")).toBeVisible();
  await expect.soft(page.getByRole("link", { name: "Buzz" })).toBeVisible();
  await expect.soft(page.getByText("Directory")).toBeVisible();
});
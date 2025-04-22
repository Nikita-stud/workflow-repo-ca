import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("login successfully", async ({ page }) => {
    await page.goto("/login/");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForURL("**/");
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });
  test("error message", async ({ page }) => {
    await page.goto("/login/");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("Skrible");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("#message-container")).not.toBeEmpty();
  });
});

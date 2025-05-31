import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("navigate to home page", async ({ page }) => {
    await page.goto("/index.html");
    await page.waitForLoadState("networkidle");
    await page.locator("#venue-container").waitFor();
    await page.locator("#venue-container a").first().click();
    await page.waitForURL("**/venue/**");
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});

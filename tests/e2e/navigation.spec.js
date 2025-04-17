import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("navigate to home page", async ({ page }) => {
    await page.goto("/index.html");
    //Does not make all posts visible
    await page.locator("#venue-container").waitFor();
    //Can not use same first id same as .ends
    await page.locator("#venue-container a").first().click();
    await page.waitForURL("**/venue/**");
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});

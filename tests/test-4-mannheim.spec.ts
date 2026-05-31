import { test, expect } from '@playwright/test';

test('location mannheim', async ({ page }) => {
  await page.goto('/abapconf2026/locations/mannheim');
  await expect(page).toHaveScreenshot();
});

test('location mannheim - full page', async ({ page }) => {
  await page.goto('/abapconf2026/locations/mannheim');
  await expect(page).toHaveScreenshot({fullPage: true});
});
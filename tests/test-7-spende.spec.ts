import { test, expect } from '@playwright/test';

test('spende', async ({ page }) => {
  await page.goto('/abapconf2026/spende/');
  await expect(page).toHaveScreenshot();
});

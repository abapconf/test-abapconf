import { test, expect } from '@playwright/test';

test('streaming', async ({ page }) => {
  await page.goto('/abapconf2026/#streaming');
  await expect(page).toHaveScreenshot();
});
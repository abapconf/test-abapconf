import { test, expect } from '@playwright/test';

test('agenda', async ({ page }) => {
  await page.goto('/abapconf2026/agenda');
  await expect(page).toHaveScreenshot();
});

test('agenda - full page', async ({ page }) => {
  await page.goto('/abapconf2026/agenda');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('agenda - track 1', async ({ page }) => {
  await page.goto('/abapconf2026/agenda/track1');
  await expect(page).toHaveScreenshot();
});

test('agenda - track 1 - fullPage', async ({ page }) => {
  await page.goto('/abapconf2026/agenda/track1');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('agenda - track 2', async ({ page }) => {
  await page.goto('/abapconf2026/agenda/track2');
  await expect(page).toHaveScreenshot();
});

test('agenda - track 2 fullPage', async ({ page }) => {
  await page.goto('/abapconf2026/agenda/track2');
  await expect(page).toHaveScreenshot({fullPage: true});
});


test('agenda - track 3', async ({ page }) => {
  await page.goto('/abapconf2026/agenda/track3');
  await expect(page).toHaveScreenshot();
});

test('agenda - track 3 fullPage', async ({ page }) => {
  await page.goto('/abapconf2026/agenda/track3');
  await expect(page).toHaveScreenshot({fullPage: true});
});
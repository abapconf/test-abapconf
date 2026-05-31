import { test, expect } from '@playwright/test';

test('sponsors', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors');
  await expect(page).toHaveScreenshot();
});

test('sponsors - conduct', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/conduct');
  await expect(page).toHaveScreenshot();
});

test('sponsors - nova-intelligence', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/nova-intelligence');
  await expect(page).toHaveScreenshot();
});

test('sponsors - brandeis-gmbh', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/brandeis-gmbh');
  await expect(page).toHaveScreenshot();
});

test('sponsors - cadaxo-gmbh', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/cadaxo-gmbh');
  await expect(page).toHaveScreenshot();
});

test('sponsors - rev-trac', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/rev-trac');
  await expect(page).toHaveScreenshot();
});

test('sponsors - softway', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/softway');
  await expect(page).toHaveScreenshot();
});

test('sponsors - package', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/sponsoring');
  await expect(page).toHaveScreenshot();
});

import { test, expect } from '@playwright/test';

test('sponsors package', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/sponsoring/');
  await expect(page).toHaveScreenshot();
});

test('sponsors overview', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/');
  await expect(page).toHaveScreenshot();
});

test('sponsors overview - full page', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('sponsors conduct', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/conduct(');
  await expect(page).toHaveScreenshot();
});

test('sponsors nova intelligence', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/nova-intelligence/');
  await expect(page).toHaveScreenshot();
});

test('sponsors Brandeis', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/brandeis-gmbh/');
  await expect(page).toHaveScreenshot();
});

test('sponsors Cadaxo', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/cadaxo-gmbh/');
  await expect(page).toHaveScreenshot();
});

test('sponsors dox42', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/dox42/');
  await expect(page).toHaveScreenshot();
});

test('sponsors Softway AG', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/softway-ag/');
  await expect(page).toHaveScreenshot();
});

test('sponsors rev-trac', async ({ page }) => {
  await page.goto('/abapconf2026/sponsors/rev-trac/');
  await expect(page).toHaveScreenshot();
});

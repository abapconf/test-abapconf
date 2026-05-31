import { test, expect } from '@playwright/test';

test('homepage - hero', async ({ page }) => {
  await page.goto('/abapconf2026');
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`- heading /ABAPConf \\d+/ [level=1]`);
  await expect(page).toHaveScreenshot();

});

test('homepage - full page', async ({ page }) => {
  await page.goto('/abapconf2026');
  test.setTimeout(10000);
  await expect(page).toHaveScreenshot({fullPage: true});

});

test('homepage - tickets', async ({ page }) => {
  await page.goto('/abapconf2026/#registration');
  await expect(page).toHaveScreenshot();
});

test('homepage - tickets - hover', async ({ page }) => {
  await page.goto('/abapconf2026/#registration');
  await expect(page.getByRole('link', { name: 'ABAPConf 2026 Online Edition' })).toBeVisible();
  await page.getByRole('link', { name: 'ABAPConf 2026 Online Edition' }).hover();
  await expect(page).toHaveScreenshot();
});


test('homepage - tickets mannheim - hover', async ({ page }) => {
  await page.goto('/abapconf2026/#registration');
  await expect(page.getByRole('link', { name: 'ABAPConf 2026 Mannheim' })).toBeVisible();
  await page.getByRole('link', { name: 'ABAPConf 2026 Mannheim' }).hover();
  await expect(page).toHaveScreenshot();
});

test('homepage - streaming', async ({ page }) => {
  await page.goto('/abapconf2026/#streaming');
  await expect(page).toHaveScreenshot();
});
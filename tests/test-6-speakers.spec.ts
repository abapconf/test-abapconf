import { test, expect } from '@playwright/test';

test('speakers', async ({ page }) => {
  await page.goto('/abapconf2026/speakers');
  await expect(page).toHaveScreenshot();
});

test('speakers - full page', async ({ page }) => {
  await page.goto('/abapconf2026/speakers');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - tobias-hofmann', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/tobias-hofmann/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - christoph-gollmick', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/christoph-gollmick/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - christopher-graw', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/christopher-graw/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - domi-bigl', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/domi-bigl/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - anne-keller', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/anne-keller/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - holger-bruchelt', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/holger-bruchelt/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - karl-kessler', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/karl-kessler/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - marc-heintz', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/marc-heintz/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - johann-foessleitner', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/johann-foessleitner/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - marcel-hermanns', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/marcel-hermanns/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - mario-kernich', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/mario-kernich/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - markus-bittner', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/markus-bittner/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - pascal-kuhnen', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/pascal-kuhnen/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - sap', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/sap/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - soeren-schlegel', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/soeren-schlegel/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers -stefan-seufert', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/stefan-seufert/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - stephan-heinberg', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/stephan-heinberg/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - thomas-kaltbeitzel', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/thomas-kaltbeitzel/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - thomas-ritter', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/thomas-ritter/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('speakers - wolfgang-roeckelein', async ({ page }) => {
  await page.goto('/abapconf2026/speaker/wolfgang-roeckelein/');
  await expect(page).toHaveScreenshot({fullPage: true});
});

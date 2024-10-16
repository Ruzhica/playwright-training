// Record your own test case that visits a website of your
// choice and checks for the title.


import { test, expect } from '@playwright/test';
test.describe("Test Suite for Navigation tests", () =>{

test('Validate title of the appropriate page', async ({ page }) => {
  await page.goto('https://qinshiftacademy.com/');
  await page.getByRole('link', { name: 'Тестинг центар', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Qinshift Academy', exact: true })).toBeVisible();
});

test('FAIL: Validate title of the appropriate page', async ({ page }) => {
    await page.goto('https://qinshiftacademy.com/');
    await page.getByRole('link', { name: 'Тестинг центар', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Qinshift Academy123', exact: true })).toBeVisible();
  });

});
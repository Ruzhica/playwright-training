import { test, expect } from '@playwright/test';
test.describe("Test Suite for Authetication test", () =>{

test('test locator: input full name', async ({ page }) => {
    await page.goto ('https://demoqa.com/text-box');
    await page.getByPlaceholder('Full Name').focus();
    await page.getByPlaceholder('Full Name').click();
    await page.getByPlaceholder('Full Name').fill('Ruzhica Dragomirovska');
});
//https://demoqa.com/checkbox

test('test locator: check box', async ({ page }) => {
    await page.goto ('https://demoqa.com/text-box');
    await page.getByPlaceholder('Full Name').focus();
    await page.getByPlaceholder('Full Name').click();
    await page.getByPlaceholder('Full Name').fill('Ruzhica Dragomirovska');
});


});
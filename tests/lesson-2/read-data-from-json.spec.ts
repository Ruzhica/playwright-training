import {test, expect } from '@playwright/test';
import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('../playwright-training/tests/Lesson-2/single-user.json', 'utf-8'));
import {SaucedemoPage} from './saucedemo-page';

test ('test', async ({ page }) => {
    await page.goto ('/');
    await page.locator('[data-test="username"]').fill(data1.username);
    await page.locator('[data-test="password"]').fill(data1.password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText(data1.title);
});

test('test with POM', async ({ page }) => {
    const saucedemosaucedemoPage = new SaucedemoPage(page);
    await saucedemosaucedemoPage.goto ();
    await saucedemosaucedemoPage.typeUsername(data1.username);
    await saucedemosaucedemoPage.typePassword(data1.password);
    await saucedemosaucedemoPage.clickLogin();
    await expect(page.locator('[data-test="title"]')).toContainText("Products");
});
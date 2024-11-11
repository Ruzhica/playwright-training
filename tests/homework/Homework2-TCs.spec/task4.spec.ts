// Task 4: Create your own test that will use parameterized locators and data from json files;

import {test, expect } from '@playwright/test';
import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators-SauceDemo/users.json', 'utf-8'));
const login = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators/login.json', 'utf-8'));


data1.forEach((user) => {
    test(`test ${user.username} ${user.password}`, async ({ page }) => {
        await page.goto ('/');
        await page.locator(login.username).fill(user.username);
        await page.locator(login.password).fill(user.password);
        await page.locator(login.loginBtn).click();
        await expect(page.locator(login.title)).toContainText("Products");
    });
});

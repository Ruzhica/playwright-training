//Task 5: Create your own parameterized tests for a different feature and create test that will run for different sets of data (i.e Login Form).


import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { LoginSauseDemoPage } from './pages-ecommerce/login-page';

// Load user data and locators
const users = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators-SauceDemo/users.json', 'utf-8'));

// Parameterized tests using Playwright's `test` for each user
users.forEach((user) => {
    test(`Login Test for ${user.username}`, async ({ page }) => {
        // Initialize the login page
        const loginPage = new LoginSauseDemoPage(page);
        
        // Go to login page and perform login actions
        await loginPage.goto();
        await loginPage.typeUsername(user.username);
        await loginPage.typePassword(user.password);
        await loginPage.clickLogin();

        // Check if the "Products" title is present after login
        const title = loginPage.checkTitle(); // Assuming this returns a Locator
    });
});



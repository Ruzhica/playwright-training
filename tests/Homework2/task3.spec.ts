// Task-3: Implement hook in your test suite for a login feature;

import { test, expect } from '@playwright/test';
test.describe("Test Suite for Shopping cart", () =>{


    test.beforeEach ("Navigate to Login page", async({page}) => {
        await page.goto ("/");
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        //
    })

    test.describe("Test Suite for Adding an item to the shopping cart", () =>{
        test('test add item to the shopping cart from home page', async ({ page }) => {

        });


        test('test add item to the shopping cart from the product page', async ({ page }) => {

        });

    });


    test.describe("Test Suite for Removing an item from the shopping cart", () =>{

        test('test remove item to the shopping cart from home page', async ({ page }) => {

        });


        test('test add item to the shopping cart from the product page', async ({ page }) => {

        });

    });


});
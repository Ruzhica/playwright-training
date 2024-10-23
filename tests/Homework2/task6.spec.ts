//Task 6: 
// Record a shopping flow from an ecommerce site.
// Transform the entire structure into page objects 
// Reuse in multiple shopping tests


import {test, expect } from '@playwright/test';
import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('../playwright-training/tests/Lesson-2/single-user.json', 'utf-8'));
const users = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/users.json', 'utf-8'));


import {SaucedemoPage} from './saucedemo-page';
import { ProductsSauseDemoPage } from './pages-ecommerce/product-detail-page';
import { LoginSauseDemoPage } from './pages-ecommerce/login-page';

test.describe ('Flow for ordering a product from Sause demo page', () => {

    test ('Adding a product to the shopping basket', async ({ page }) => {
        const Products = new ProductsSauseDemoPage(page);
        const loginPage = new LoginSauseDemoPage(page);
        await loginPage.standardLogin;
        await Products.clickOnFirstProduct;
        await Products.clickOnShoppingBasket;
        await Products.clickOnCartButton;

        // Open the shopping cart
        await Products.clickOnShoppingBasket();
        // Check if the cart contains exactly 1 item
        await Products.checkCartItemCount(1);  // You can adjust the number as needed    });

    });

    test ('Remove it from shopping basket after adding it', async ({ page }) => {
        const Products = new ProductsSauseDemoPage(page);
        const loginPage = new LoginSauseDemoPage(page);
        await loginPage.standardLogin;
        await Products.clickOnFirstProduct;
        await Products.clickOnShoppingBasket;
        await Products.clickOnCartButton;
        await Products.removeFromShoppignBasket;
    });
       
        test('Sorting procuts in descending (Z to A)', async ({ page }) => {
        const Products = new ProductsSauseDemoPage(page);
        const loginPage = new LoginSauseDemoPage(page);
        await loginPage.standardLogin;
        await Products.sortByZtoA;
    });

    test('Sorting procuts in ascending (A to Z)', async ({ page }) => {
        const Products = new ProductsSauseDemoPage(page);
        const loginPage = new LoginSauseDemoPage(page);
        await loginPage.standardLogin;
        await Products.sortByAtoZ;
    });
 

})
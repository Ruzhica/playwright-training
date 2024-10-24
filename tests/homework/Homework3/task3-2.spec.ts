//Task 2: 
// Add fix me tag of some test


import {test, expect } from '@playwright/test';
import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('../playwright-training/tests/Lesson-2/single-user.json', 'utf-8'));
const users = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators-SauceDemo/users.json', 'utf-8'));


import {SaucedemoPage} from './saucedemo-page';
import { ProductsSauseDemoPage } from './pages-ecommerce/product-detail-page';
import { LoginSauseDemoPage } from './pages-ecommerce/login-page';

test.describe ('Flow for ordering a product from Sause demo page', () => {
    
    //still working on the function
    test.fixme ('Adding a product to the shopping basket', async ({ page }) => {
        const Products = new ProductsSauseDemoPage(page);
        const loginPage = new LoginSauseDemoPage(page);
        await loginPage.standardLogin;
        await Products.clickOnFirstProduct;
        await Products.clickOnShoppingBasket;
        await Products.clickOnCartButton;

        // Open the shopping cart
        // await Products.clickOnShoppingBasket();
        // // Check if the cart contains exactly 1 item
        // await Products.checkCartItemCount(1);  // fneed to re-work on function, this is for validation });

    });

    test.fixme ('Remove it from shopping basket after adding it', async ({ page }) => {
        const Products = new ProductsSauseDemoPage(page);
        const loginPage = new LoginSauseDemoPage(page);
        await loginPage.standardLogin;
        await Products.clickOnFirstProduct;
        await Products.clickOnShoppingBasket;
        await Products.clickOnCartButton;
        await Products.removeFromShoppignBasket;
        //assert if shopping basket is empty

        await Products.clickOnCartButton;

        //the following to be put in a functiona and the funcktion to be called here
        // const button = await Products.clickOnShoppingBasket;
        // await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');


    });
       
        test('Sorting procuts in descending (Z to A) @smoke', async ({ page }) => {
        const Products = new ProductsSauseDemoPage(page);
        const loginPage = new LoginSauseDemoPage(page);
        await loginPage.standardLogin;
        await Products.sortByZtoA;
    });

    test('Sorting procuts in ascending (A to Z)', {tag: 'smoke'}, async ({ page }) => {
        const Products = new ProductsSauseDemoPage(page);
        const loginPage = new LoginSauseDemoPage(page);
        await loginPage.standardLogin;
        await Products.sortByAtoZ;
    });
 

})
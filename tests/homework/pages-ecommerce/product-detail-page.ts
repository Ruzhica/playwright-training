import { expect, test, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs'; // Import fs for reading files
const products = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators-SauceDemo/productsList.json', 'utf-8'));

export class ProductsSauseDemoPage {
    readonly page: Page;
    readonly clickOnProduct: Locator;
    readonly clickOnCard: Locator;
    readonly clickAddToCardBtn: Locator;
    readonly clickOnAtoZ: Locator;
    readonly clickOnZtoA: Locator;
    readonly shoppingBasket: Locator; 
    readonly continueShopping: Locator;
    readonly removeProductBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickOnProduct = page.locator(products.clickOnProduct); 
        this.clickOnCard = page.locator(products.clickOnCard);
        this.clickAddToCardBtn = page.locator(products.clickAddToCardBtn);
        this.clickOnAtoZ = page.locator(products.clickOnAtoZ); 
        this.clickOnZtoA = page.locator(products.clickOnZtoA);
        this.shoppingBasket = page.locator(products.shoppingBasket);
        this.continueShopping = page.locator(products.continueShopping);
        this.removeProductBtn = page.locator(products.removeProductBtn);
    }

    async clickOnFirstProduct() {
        await this.clickOnProduct.click();
    }

    async clickOnShoppingBasket() { 
        await this.clickOnCard.click;
    }

    async clickOnCartButton() { 
        await this.clickAddToCardBtn.click();
    }

    async sortByZtoA() {
        await this.clickOnZtoA.click();
    }

    async sortByAtoZ() {
        await this.clickOnAtoZ.click();
    }

    async removeFromShoppignBasket(){
        await this.removeProductBtn.click();
    }

    async checkCartItemCount(expectedCount: number = 1) {
        // Get the text content of the cart item count (e.g., the number inside the cart icon)
        const cartCountText = await this.shoppingBasket.textContent();

        if (cartCountText) {
            // Convert the cart count text to a number
            const cartCount = parseInt(cartCountText.trim(), 10);

            // Assert that the cart count matches the expected number (e.g., 1)
            expect(cartCount).toBe(expectedCount);

            // Optionally, log the result
            console.log(`Cart contains ${cartCount} items.`);
        } else {
            throw new Error('Failed to retrieve cart item count.');
        }
    }
}


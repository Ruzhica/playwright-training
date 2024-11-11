// BooksPage.ts

import { Page, Locator } from '@playwright/test';

export class BooksPage {
    private page: Page;
    private searchField: Locator;
    private searchButton: Locator;
    private bookResults: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('#searchBox'); 
        this.searchButton = page.locator('#searchButton'); 
        this.bookResults = page.locator('.rt-tbody'); 
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/books');
    }

    async searchForBook(bookName: string) {
        await this.searchField.fill(bookName); 
        await this.searchButton.click(); 
    }

    async verifyBookIsDisplayed(bookName: string) {
        const book = await this.bookResults.locator(`text=${bookName}`);
        await book.isVisible(); 
    }
}

// books.spec.ts

import { test, expect } from '@playwright/test';
import { BooksPage } from '../pages-demoQA/books-page';

test.describe('Books Page Search', () => {
    let booksPage: BooksPage;

    test.beforeEach(async ({ page }) => {
        booksPage = new BooksPage(page);
        await booksPage.navigate();
    });

    test('should search for a book and verify it appears in the results', async () => {
        const bookName = 'Learning JavaScript Design Patterns'; 
        await booksPage.searchForBook(bookName);
        await booksPage.verifyBookIsDisplayed(bookName);
    });
});

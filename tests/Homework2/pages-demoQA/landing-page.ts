import { test, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs'; // Import fs for reading files
const login = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators/login.json', 'utf-8'));

export class SaucedemoPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator; // Renaming this to avoid conflict with loginLocators

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(login.username); 
        this.password = page.locator(login.password);
        this.loginButton = page.locator(login.loginBtn); 
    }

    async goto() {
        await this.page.goto('/');
    }

    async typeUsername(user: string) { 
        await this.username.fill(user);
    }

    async typePassword(pass: string) { 
        await this.password.fill(pass);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}

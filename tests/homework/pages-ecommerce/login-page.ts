import { expect, test, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs'; // Import fs for reading files
const login = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators/login.json', 'utf-8'));
const users = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators/login.json', 'utf-8'));


export class LoginSauseDemoPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly title: Locator;


    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(login.username); 
        this.password = page.locator(login.password);
        this.loginButton = page.locator(login.loginBtn); 
        this.title = page.locator(login.title);
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

    async standardLogin(){
        await this.page.goto("/");
        await this.username.fill(users[0].username);
        await this.password.fill(users[0].password);
        await this.loginButton.click();
    }

    async checkTitle(){
        await expect(this.title).toContainText("Products");

    }
}

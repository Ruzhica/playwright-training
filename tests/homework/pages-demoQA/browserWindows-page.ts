// BrowserWindowsPage.ts
import { Page, Locator } from '@playwright/test';

export class BrowserWindowsPage {
    readonly page: Page;
    readonly newTabButton: Locator;
    readonly newWindowButton: Locator;
    readonly newWindowMessageButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newTabButton = page.locator('#tabButton');
        this.newWindowButton = page.locator('#windowButton');
        this.newWindowMessageButton = page.locator('#messageWindowButton');
    }

    async openNewTab() {
        await this.newTabButton.click();
    }

    async openNewWindow() {
        await this.newWindowButton.click();
    }

    async openNewWindowWithMessage() {
        await this.newWindowMessageButton.click();
    }

    // Get the title of the new tab or window
    async getNewWindowTitle() {
        return this.page.title();
    }

    // Get the text of the message in the new window
    async getNewWindowMessageText() {
        return this.page.locator('body').innerText();
    }
}

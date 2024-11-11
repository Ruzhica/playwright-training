// ButtonsPage.ts

import { Page, Locator } from '@playwright/test';

export class ButtonsPage {
    private page: Page;
    private clickButton: Locator;
    private doubleClickButton: Locator;
    private rightClickButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickButton = page.locator('#buttonId'); 
        this.doubleClickButton = page.locator('#doubleClickBtn');
        this.rightClickButton = page.locator('#rightClickBtn');
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/buttons');
    }

    async performClick() {
        await this.clickButton.click();
    }

    async performDoubleClick() {
        await this.doubleClickButton.dblclick();
    }

    async performRightClick() {
        await this.rightClickButton.click({ button: 'right' });
    }
}

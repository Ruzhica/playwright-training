// ToolTipsPage.ts
import { Page, Locator } from '@playwright/test';

export class ToolTipsPage {
    readonly page: Page;
    readonly hoverButton: Locator;
    readonly toolTip: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hoverButton = page.locator('#toolTipButton'); 
        this.toolTip = page.locator('.tooltip-inner');     }

    async hoverOverButton() {
        await this.hoverButton.hover();
    }

    async getTooltipText() {
        return await this.toolTip.innerText();
    }
}

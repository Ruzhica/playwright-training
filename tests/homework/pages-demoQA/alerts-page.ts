// AlertsPage.ts
import { Page, Locator } from '@playwright/test';

export class AlertsPage {
    readonly page: Page;
    readonly alertButton: Locator;
    readonly confirmButton: Locator;
    readonly promptButton: Locator;
    readonly resultMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.alertButton = page.locator('#alertButton');
        this.confirmButton = page.locator('#confirmButton');
        this.promptButton = page.locator('#promptButton');
        this.resultMessage = page.locator('#result');
    }

    async triggerAlert() {
        await this.alertButton.click();
    }

    async triggerConfirmAlert(accept: boolean) {
        await this.confirmButton.click();
        const dialog = await this.page.waitForEvent('dialog');
        if (accept) {
            await dialog.accept();  
        } else {
            await dialog.dismiss();  
        }
    }

    async triggerPromptAlert(inputText: string) {
        await this.promptButton.click();
        const dialog = await this.page.waitForEvent('dialog');
        await dialog.accept(inputText);  
    }

    async getResultMessage() {
        return this.resultMessage.innerText();
    }
}

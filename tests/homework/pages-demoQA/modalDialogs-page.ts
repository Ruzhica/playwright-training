// ModalDialogsPage.ts
import { Page, Locator } from '@playwright/test';

export class ModalDialogsPage {
    readonly page: Page;
    readonly smallDialogButton: Locator;
    readonly bigDialogButton: Locator;
    readonly smallDialog: Locator;
    readonly bigDialog: Locator;
    readonly smallDialogCloseButton: Locator;
    readonly bigDialogCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.smallDialogButton = page.locator('#showSmallModal');
        this.bigDialogButton = page.locator('#showLargeModal');
        this.smallDialog = page.locator('.modal-content').first();  // Small modal
        this.bigDialog = page.locator('.modal-content').nth(1);     // Big modal
        this.smallDialogCloseButton = page.locator('#closeSmallModal');
        this.bigDialogCloseButton = page.locator('#closeLargeModal');
    }

    async openSmallDialog() {
        await this.smallDialogButton.click();
    }

    async openBigDialog() {
        await this.bigDialogButton.click();
    }

    async closeSmallDialog() {
        await this.smallDialogCloseButton.click();
    }

    async closeBigDialog() {
        await this.bigDialogCloseButton.click();
    }

    // Get the content of the dialogs
    async getSmallDialogContent() {
        return this.smallDialog.innerText();
    }

    async getBigDialogContent() {
        return this.bigDialog.innerText();
    }
}

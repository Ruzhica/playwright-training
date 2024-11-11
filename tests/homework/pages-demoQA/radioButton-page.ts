import { Page, Locator } from '@playwright/test';

export class RadioButtonPage {
    readonly page: Page;
    readonly impressiveRadioButton: Locator;
    readonly yesRadioButton: Locator;
    readonly noRadioButton: Locator;
    readonly resultText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.impressiveRadioButton = page.locator('label[for="impressiveRadio"]');
        this.yesRadioButton = page.locator('label[for="yesRadio"]');
        this.noRadioButton = page.locator('label[for="noRadio"]');
        this.resultText = page.locator('.text-success');
    }

    async open() {
        await this.page.goto('https://demoqa.com/radio-button');
    }

    async selectImpressive() {
        await this.impressiveRadioButton.click();
    }

    async selectYes() {
        await this.yesRadioButton.click();
    }

    async tryToSelectNo() {
        await this.noRadioButton.click();
    }

    async getResultText() {
        return this.resultText.textContent();
    }

    async isNoRadioButtonDisabled() {
        return await this.noRadioButton.isDisabled();
    }
}

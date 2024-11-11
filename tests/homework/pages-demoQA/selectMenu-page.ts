// SelectMenuPage.ts
import { Page, Locator } from '@playwright/test';

export class SelectMenuPage {
    readonly page: Page;
    readonly singleSelect: Locator;
    readonly multiSelectState: Locator;
    readonly multiSelectColor: Locator;
    readonly selectedOption: Locator;

    constructor(page: Page) {
        this.page = page;
        this.singleSelect = page.locator('#selectMenu'); // Single select dropdown
        this.multiSelectState = page.locator('#state'); // Multi-select dropdown for state
        this.multiSelectColor = page.locator('#color'); // Multi-select dropdown for color
        this.selectedOption = page.locator('.css-1rhbuit-singleValue'); // Selected value element (for single select)
    }

    async selectSingleOption(option: string) {
        await this.singleSelect.selectOption({ label: option });
    }

    async selectMultiState(options: string[]) {
        for (const option of options) {
            await this.multiSelectState.selectOption({ label: option });
        }
    }

    async selectMultiColor(options: string[]) {
        for (const option of options) {
            await this.multiSelectColor.selectOption({ label: option });
        }
    }

    async getSelectedOption() {
        return await this.selectedOption.innerText();
    }
}

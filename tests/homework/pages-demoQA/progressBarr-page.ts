// ProgressBarPage.ts
import { Page, Locator } from '@playwright/test';

export class ProgressBarPage {
    readonly page: Page;
    readonly startButton: Locator;
    readonly stopButton: Locator;
    readonly progressBar: Locator;
    readonly progressText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.startButton = page.locator('#startStopButton'); 
        this.stopButton = page.locator('#resetButton'); 
        this.progressBar = page.locator('#progressBar'); 
        this.progressText = page.locator('.progress-text'); 
    }

    async startProgressBar() {
        await this.startButton.click();
    }

    async stopProgressBar() {
        await this.stopButton.click();
    }

    async getProgressPercentage() {
        const text = await this.progressText.innerText();
        return parseInt(text.replace('%', '').trim()); // Extract percentage from text
    }

    async isProgressComplete() {
        const percentage = await this.getProgressPercentage();
        return percentage === 100;
    }
}

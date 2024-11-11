// UploadDownloadPage.ts

import { Page, Locator, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export class UploadDownloadPage {
    private page: Page;
    private downloadButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.downloadButton = page.locator('#downloadButton');
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/upload-download');
    }

    async downloadFile() {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.downloadButton.click(),
        ]);

        const downloadPath = path.join(__dirname, 'downloads', await download.suggestedFilename());
        await download.saveAs(downloadPath);

        expect(fs.existsSync(downloadPath)).toBe(true);

        fs.unlinkSync(downloadPath);
    }
}

// LinksPage.ts

import { Page, Locator, expect } from '@playwright/test';

export class LinksPage {
    private page: Page;
    private homeLink: Locator;
    private createdLink: Locator;
    private noContentLink: Locator;
    private movedLink: Locator;
    private badRequestLink: Locator;
    private unauthorizedLink: Locator;
    private forbiddenLink: Locator;
    private notFoundLink: Locator;
    private responseMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('#simpleLink');
        this.createdLink = page.locator('a#created');
        this.noContentLink = page.locator('a#no-content');
        this.movedLink = page.locator('a#moved');
        this.badRequestLink = page.locator('a#bad-request');
        this.unauthorizedLink = page.locator('a#unauthorized');
        this.forbiddenLink = page.locator('a#forbidden');
        this.notFoundLink = page.locator('a#invalid-url');
        this.responseMessage = page.locator('#linkResponse');
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/links');
    }

    async clickHomeLink() {
        const [newTab] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.homeLink.click()
        ]);

        await newTab.waitForLoadState();
        expect(newTab.url()).toBe('https://demoqa.com/');
        await newTab.close();
    }

    async clickAndValidateLink(link: Locator, expectedMessage: string) {
        await link.click();
        await expect(this.responseMessage).toHaveText(expectedMessage);
    }
}

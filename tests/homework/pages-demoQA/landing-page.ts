import { expect, test, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs'; // Import fs for reading files
const landingPageSelectors = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators-demoQA/ladingPageSelectors.json', 'utf-8'));

export class DemoQALandingPage {
    readonly page: Page;
    readonly clickOnElements: Locator;
    readonly clickOnForms: Locator;
    readonly clickOnAlertsFrameWindows: Locator; 
    readonly clickOnWidgets: Locator; 
    readonly clickOnInteractions: Locator; 
    readonly clickOnBookStoreApp: Locator; 


    constructor(page: Page) {
        this.page = page;
        this.clickOnElements = page.locator(landingPageSelectors.clickOnElements); 
        this.clickOnForms = page.getByRole(landingPageSelectors.clickOnForms);
        this.clickOnAlertsFrameWindows = page.getByRole(landingPageSelectors); 
        this.clickOnWidgets = page.getByRole(landingPageSelectors.clickOnAlertsFrameWindows); 
        this.clickOnInteractions = page.getByRole(landingPageSelectors.clickOnInteractions); 
        this.clickOnBookStoreApp = page.getByRole(landingPageSelectors.clickOnBookStoreApp); 

    }

    async goto() {
        await this.page.goto('https://demoqa.com/');
    }

    async clickOnElementsTextBtn() { 
        const locator = landingPageSelectors.headingElements;
        await this.page.getByRole(locator.role, { name: locator.name }).click();
    }

    async clickOnFormsTextBtn() { 
        const locator = landingPageSelectors.clickOnForms;
        await this.page.getByRole(locator.role, { name: locator.name }).click();
    }

    async clickOnAlertsFrameWindowsTextBtn() { 
        const locator = landingPageSelectors.clickOnAlertsFrameWindows;
        await this.page.getByRole(locator.role, { name: locator.name }).click();
    }

    async clickOnWidgetsTextBtn() { 
        const locator = landingPageSelectors.clickOnWidgets;
        await this.page.getByRole(locator.role, { name: locator.name }).click();
    }
    async clickOnInteractionsTextBtn() { 
        const locator = landingPageSelectors.clickOnInteractions;
        await this.page.getByRole(locator.role, { name: locator.name }).click();
    }
    async clickOnBookStoreAppTextBtn() { 
        const locator = landingPageSelectors.clickOnBookStoreApp;
        await this.page.getByRole(locator.role, { name: locator.name }).click();
    }

    async validateUrl(expectedUrl: string | RegExp): Promise<boolean> {
        try {  
            await expect(this.page).toHaveURL(expectedUrl);
            return true; 
        } catch (error) {
            return false;  
        }

    }   
}

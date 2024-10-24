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
        this.clickOnElements = page.getByRole('heading', { name: 'Elements' }); 
        // this.clickOnElements = page.getByRole(landingPageSelectors.clickOnElements); 
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
        // await this.clickOnElements.focus();
        await this.clickOnElements.hover();
        await this.clickOnElements.click();
    }

    async clickOnFormsTextBtn() { 
        await this.clickOnElements.focus();
        await this.clickOnForms.click();
    }

    async clickOnAlertsFrameWindowsTextBtn() { 
        await this.clickOnElements.focus();
        await this.clickOnAlertsFrameWindows.click();
    }

    async clickOnWidgetsTextBtn() { 
        await this.clickOnElements.focus();
        await this.clickOnWidgets.click();
    }
    async clickOnInteractionsTextBtn() { 
        await this.clickOnElements.focus();
        await this.clickOnInteractions.click();
    }
    async clickOnBookStoreAppTextBtn() { 
        await this.clickOnElements.focus();
        await this.clickOnBookStoreApp.click();
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

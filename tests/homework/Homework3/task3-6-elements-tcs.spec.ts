// Task 5: create separate files for each page on https://demoqa.com/ and handle all actions


import {test, expect } from '@playwright/test';
import * as fs from 'fs';

import {DemoQALandingPage} from '../pages-demoQA/landing-page';

test.describe ('Checking all locators from the landing page and validating the navigarion', () => {

    test ('Navigate to TextBox page;', async ({ page }) => {
        const landingPage = new DemoQALandingPage(page);
        await landingPage.goto;
        await landingPage.clickOnElementsTextBtn();

        //validate if user is on appropeate page by URL
        const isUrlCorrect = await landingPage.validateUrl('https://demoqa.com/elements');
        console.log('Is URL correct?', isUrlCorrect);
        expect(isUrlCorrect).toBe(true);
    });

    test ('Navigate to Forms page;', async ({ page }) => {
        const landingPage = new DemoQALandingPage(page);
        await landingPage.goto;
        await landingPage.clickOnFormsTextBtn();
        
        //validate if user is on appropeate page by URL
        const isUrlCorrect = await landingPage.validateUrl('https://demoqa.com/forms');
        console.log('Is URL correct?', isUrlCorrect);
        expect(isUrlCorrect).toBe(true);
    });

    test ('Navigate to Alerts, Frame & Windows page;', async ({ page }) => {
        const landingPage = new DemoQALandingPage(page);
        await landingPage.goto;
        await landingPage.clickOnAlertsFrameWindowsTextBtn();
        
        //validate if user is on appropeate page by URL
        const isUrlCorrect = await landingPage.validateUrl('https://demoqa.com/alertsWindows');
        console.log('Is URL correct?', isUrlCorrect);
        expect(isUrlCorrect).toBe(true);
    });

    test ('Navigate to Widgets  page;', async ({ page }) => {
        const landingPage = new DemoQALandingPage(page);
        await landingPage.goto;
        await landingPage.clickOnWidgetsTextBtn();
        
        //validate if user is on appropeate page by URL
        const isUrlCorrect = await landingPage.validateUrl('https://demoqa.com/widgets');
        console.log('Is URL correct?', isUrlCorrect);
        expect(isUrlCorrect).toBe(true);
    });

    test ('Navigate to Interactions page;', async ({ page }) => {
        const landingPage = new DemoQALandingPage(page);
        await landingPage.goto;
        await landingPage.clickOnInteractionsTextBtn();
        
        //validate if user is on appropeate page by URL
        const isUrlCorrect = await landingPage.validateUrl('https://demoqa.com/interaction');
        console.log('Is URL correct?', isUrlCorrect);
        expect(isUrlCorrect).toBe(true);
    });

    test ('Navigate to Book Store Application page;', async ({ page }) => {
        const landingPage = new DemoQALandingPage(page);
        await landingPage.goto;
        await landingPage.clickOnBookStoreAppTextBtn();
        
        //validate if user is on appropeate page by URL
        const isUrlCorrect = await landingPage.validateUrl('https://demoqa.com/books');
        console.log('Is URL correct?', isUrlCorrect);
        expect(isUrlCorrect).toBe(true);
    });
        

});


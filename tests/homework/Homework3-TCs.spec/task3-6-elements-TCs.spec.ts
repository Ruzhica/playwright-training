// Task 5: create separate files for each page on https://demoqa.com/ and handle all actions


import {test, expect } from '@playwright/test';
import * as fs from 'fs';
import {DemoQAElementsPage} from '../pages-demoQA/elements-page';
import { TextBoxPage } from '../pages-demoQA/textBox-page';
import { CheckboxPage } from '../pages-demoQA/checkBox-page';
import { RadioButtonPage } from '../pages-demoQA/radioButton-page';
import { TablePage } from '../pages-demoQA/table-page';
import { ButtonsPage } from '../pages-demoQA/buttons-page';
import { LinksPage } from '../pages-demoQA/links-page';
import {UploadDownloadPage} from '../pages-demoQA/uploadDownload-page';


test.describe("Checking Locators from elements page", () =>{

    test('should fill and submit the Text Box form', async ({ page }) => {
        const textBoxPage = new TextBoxPage(page);
        
        await textBoxPage.navigateToTextBox();
    
        await textBoxPage.fillForm(
          'John Doe',             
          'john.doe@example.com', 
          '123 Current St',       
          '456 Permanent St'      
        );
    
        await expect(page.locator('#output')).toBeVisible();
        await expect(page.locator('#name')).toContainText('John Doe');
        await expect(page.locator('#email')).toContainText('john.doe@example.com');
      });

      test('Select checkbox on demo page', async ({ page }) => {
        const checkboxPage = new CheckboxPage(page);
        await checkboxPage.navigateToCheckboxPage();
        await checkboxPage.expandCheckboxItems();
        await checkboxPage.selectCheckbox();
        const isSelected = await checkboxPage.isCheckboxSelected();
        expect(isSelected).toBeTruthy();
      });
    });

    test.describe('Radio Button Tests', () => {
        let radioButtonPage: RadioButtonPage;
    
        test.beforeEach(async ({ page }) => {
            radioButtonPage = new RadioButtonPage(page);
            await radioButtonPage.open();
        });
    
        test('Select Impressive and validate message', async () => {
            await radioButtonPage.selectImpressive();
            const resultText = await radioButtonPage.getResultText();
            expect(resultText).toBe('Impressive');
        });
    
        test('Select Yes and validate message', async () => {
            await radioButtonPage.selectYes();
            const resultText = await radioButtonPage.getResultText();
            expect(resultText).toBe('Yes');
        });
    
        test('Try to select No and validate it is not selectable', async () => {
            const isNoDisabled = await radioButtonPage.isNoRadioButtonDisabled();
            expect(isNoDisabled).toBe(true);
        });
    });

    test('Add and verify record in the table', async ({ page }) => {
        const tablePage = new TablePage(page);
        await page.goto('https://demoqa.com/webtables');
    
        await tablePage.openForm();
    
        const firstName = 'Alden';
        await tablePage.fillForm(firstName, 'Cantrell', 'alden@example.com', '30', '5000', 'Engineering');
        await tablePage.submitForm();
    
        await tablePage.searchRecord(firstName);
    
        const rowCount = await tablePage.getTableRowCount();
        expect(rowCount).toBe(1);
    
        const isRecordVisible = await tablePage.isRecordVisible(firstName);
        expect(isRecordVisible).toBe(true);
    });

    test.describe('Buttons Page Actions', () => {
        let buttonsPage: ButtonsPage;
    
        test.beforeEach(async ({ page }) => {
            buttonsPage = new ButtonsPage(page);
            await buttonsPage.navigate();
        });
    
        test('should perform a single click', async () => {
            await buttonsPage.performClick();
        });
    
        test('should perform a double click', async () => {
            await buttonsPage.performDoubleClick();
        });
    
        test('should perform a right click', async () => {
            await buttonsPage.performRightClick();
        });
    });


    test.describe('Links Page Actions', () => {
        let linksPage: LinksPage;
    
        test.beforeEach(async ({ page }) => {
            linksPage = new LinksPage(page);
            await linksPage.navigate();
        });
    
        test('should open Home link in a new tab and verify URL', async () => {
            await linksPage.clickHomeLink();
        });
    
        test('should validate Created link message', async () => {
            await linksPage.clickAndValidateLink(linksPage.createdLink, 'Link has responded with staus 201 and status text Created');
        });
    
        test('should validate No Content link message', async () => {
            await linksPage.clickAndValidateLink(linksPage.noContentLink, 'Link has responded with staus 204 and status text No Content');
        });
    
        test('should validate Moved link message', async () => {
            await linksPage.clickAndValidateLink(linksPage.movedLink, 'Link has responded with staus 301 and status text Moved Permanently');
        });
    
        test('should validate Bad Request link message', async () => {
            await linksPage.clickAndValidateLink(linksPage.badRequestLink, 'Link has responded with staus 400 and status text Bad Request');
        });
    
        test('should validate Unauthorized link message', async () => {
            await linksPage.clickAndValidateLink(linksPage.unauthorizedLink, 'Link has responded with staus 401 and status text Unauthorized');
        });
    
        test('should validate Forbidden link message', async () => {
            await linksPage.clickAndValidateLink(linksPage.forbiddenLink, 'Link has responded with staus 403 and status text Forbidden');
        });
    
        test('should validate Not Found link message', async () => {
            await linksPage.clickAndValidateLink(linksPage.notFoundLink, 'Link has responded with staus 404 and status text Not Found');
        });
    });


test.describe('Upload Download Page Actions', () => {
    let uploadDownloadPage: UploadDownloadPage;

    test.beforeEach(async ({ page }) => {
        uploadDownloadPage = new UploadDownloadPage(page);
        await uploadDownloadPage.navigate();
    });

    test('should download file successfully', async () => {
        await uploadDownloadPage.downloadFile();
    });
});




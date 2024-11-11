import { expect, test, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs'; // Import fs for reading files
const elementsPageSelectors = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators-demoQA/elementsPageSelectors.json', 'utf-8'));

export class DemoQAElementsPage {
    readonly page: Page;
    readonly clickOnText: Locator;
    readonly insertFullName: Locator;
    readonly insertEmail: Locator; 
    readonly insertCurrentAddress: Locator; 
    readonly insertPermanentAddress: Locator; 
    readonly clickSubmit: Locator; 
    readonly checkbox: Locator;
    readonly expandHomeCheckBox: Locator;
    readonly radioButton: Locator;
    readonly selectImpressiveRadioButton: Locator;
    readonly getSuccessfulMsgForSelectImpressive: Locator;
    readonly selectWebTables: Locator;
    readonly clickOnAddButton: Locator;
    readonly inputFirstNameWebTable: Locator;
    readonly inputLastNameWebTable: Locator;
    readonly inputMailWebTable: Locator;
    readonly inputAgeWebTable: Locator;
    readonly inputSalaryWebTable: Locator;
    readonly inputDepartmentWebTable: Locator;
    readonly clickOnSubmitButtonWebTable: Locator;
    // readonly : Locator;
    // readonly : Locator;
    // readonly : Locator;
    // readonly : Locator;
    // readonly : Locator;



    constructor(page: Page) {
        this.page = page;
        // this.clickOnElements = page.getByRole(landingPageSelectors.clickOnElements); 
        this.insertFullName = page.getByPlaceholder('Full Name');
        // this.insertEmail = page.getByPlaceholder(elementsPageSelectors.insertEmail);
        this.insertEmail = page.getByPlaceholder('name@example.com'); 
        this.insertCurrentAddress = page.getByPlaceholder('Current Address'); 
        // this.insertCurrentAddress = page.getByPlaceholder(elementsPageSelectors.insertCurrentAddress); 
        this.insertPermanentAddress = page.locator('#permanentAddress'); 
        // this.insertPermanentAddress = page.locator(elementsPageSelectors.insertPermanentAddress);
        // this.clickSubmit = page.getByTestId(elementsPageSelectors.clickSubmit); 
        this.checkbox = page.getByText('Check Box');
        this.expandHomeCheckBox = page.getByLabel('Toggle');
        this.radioButton = page.getByText('Radio Button');
        this.selectWebTables = page.getByText('Web Tables');
        this.clickOnAddButton = page.getByRole('button', { name: 'Add' });
        this.inputFirstNameWebTable = page.getByPlaceholder('First Name');
        this.inputLastNameWebTable = page.getByPlaceholder('First Name');
        this.inputMailWebTable = page.getByPlaceholder('First Name');
        this.inputAgeWebTable = page.getByPlaceholder('Age');
        this.inputSalaryWebTable = page.getByPlaceholder('Salary');
        this.inputDepartmentWebTable = page.getByPlaceholder('Department');
        this.clickOnSubmitButtonWebTable

    }

    async goto() {
        await this.page.goto('https://demoqa.com/elements');
    }

    async clickTextBox() {
        const { locator, filter } = elementsPageSelectors.clickOnTextBox.textBox;
        await this.page.locator(locator).filter({ hasText: filter.hasText }).click();
      }

    async validateUrl(expectedUrl: string | RegExp): Promise<boolean> {
        try {  
            await expect(this.page).toHaveURL(expectedUrl);
            return true; 
        } catch (error) {
            return false;  
        }

    }   

    async insertFullNameTxt() { 
        await this.insertFullName.click();
        await this.insertFullName.fill('Ruzhica Dragomirovska');    
    }

    async insertEmailAddress() { 
        await this.insertEmail.focus();
        await this.insertEmail.click();
        await this.insertEmail.fill('RuzhicaDragomirovska@gmail.com');    
    }

    async insertCurrentAddressTxt() { 
        await this.insertCurrentAddress.click();
        await this.insertCurrentAddress.fill('1596 br.29-3/69');    
    }

    async insertPermanentAddressTxt() { 
        await this.insertPermanentAddress.click();
        await this.insertPermanentAddress.fill('Angel Stojchev br.26');    
    }

    async clickOnSubmitBtn() { 
        const { role, name } = elementsPageSelectors.submitButton;
        await this.page.getByRole(role, { name: 'Submit'}).click(); 
    }

    async clickOnCheckBox() { 
        await this.checkbox.click();
    }

    async selectImpressiveRadiotBtnAndValidateMsg (){
        await this.radioButton.click();
        await this.selectImpressiveRadioButton.click();
        await this.getSuccessfulMsgForSelectImpressive. 
    }


}
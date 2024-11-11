// TablePage.ts
import { Page, Locator } from '@playwright/test';

export class TablePage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly ageInput: Locator;
    readonly salaryInput: Locator;
    readonly departmentInput: Locator;
    readonly submitButton: Locator;
    readonly searchField: Locator;
    readonly tableRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.locator('#addNewRecordButton');
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.ageInput = page.locator('#age');
        this.salaryInput = page.locator('#salary');
        this.departmentInput = page.locator('#department');
        this.submitButton = page.locator('#submit');
        this.searchField = page.locator('#searchBox');
        this.tableRows = page.locator('.rt-tbody .rt-tr-group');
    }

    async openForm() {
        await this.addButton.click();
    }

    async fillForm(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.ageInput.fill(age);
        await this.salaryInput.fill(salary);
        await this.departmentInput.fill(department);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async searchRecord(name: string) {
        await this.searchField.fill(name);
        await this.searchField.press('Enter');
    }

    async getTableRowCount() {
        return await this.tableRows.count();
    }

    async isRecordVisible(name: string): Promise<boolean> {
        const rows = this.tableRows;
        for (let i = 0; i < await rows.count(); i++) {
            const text = await rows.nth(i).innerText();
            if (text.includes(name)) {
                return true;
            }
        }
        return false;
    }
}

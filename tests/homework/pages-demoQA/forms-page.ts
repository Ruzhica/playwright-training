// FormPage.ts
import { Page, Locator } from '@playwright/test';

export class FormPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly genderRadioButtons: Locator;
    readonly mobileInput: Locator;
    readonly dateOfBirthInput: Locator;
    readonly subjectInput: Locator;
    readonly hobbiesCheckboxes: Locator;
    readonly addressInput: Locator;
    readonly stateDropdown: Locator;
    readonly cityDropdown: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.genderRadioButtons = page.locator('[name="gender"]');
        this.mobileInput = page.locator('#userNumber');
        this.dateOfBirthInput = page.locator('#dateOfBirthInput');
        this.subjectInput = page.locator('#subjectsInput');
        this.hobbiesCheckboxes = page.locator('[type="checkbox"]');
        this.addressInput = page.locator('#currentAddress');
        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');
        this.submitButton = page.locator('#submit');
    }

    async fillPersonalDetails(firstName: string, lastName: string, email: string, gender: string, mobile: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);

        // Select gender radio button
        await this.genderRadioButtons.locator(`input[value="${gender}"]`).click();

        await this.mobileInput.fill(mobile);
    }

    async fillDateOfBirth(day: string, month: string, year: string) {
        await this.dateOfBirthInput.click();
        await this.page.locator(`.react-datepicker__month-select`).selectOption({ value: month });
        await this.page.locator(`.react-datepicker__year-select`).selectOption({ value: year });
        await this.page.locator(`.react-datepicker__day--0${day}`).click();
    }

    async fillSubjects(subjects: string[]) {
        for (const subject of subjects) {
            await this.subjectInput.fill(subject);
            await this.page.locator('.subjects-auto-complete__menu').locator('div').first().click();
        }
    }

    async selectHobbies(hobbies: string[]) {
        for (const hobby of hobbies) {
            await this.hobbiesCheckboxes.locator(`label:has-text("${hobby}")`).click();
        }
    }

    async fillAddress(address: string, state: string, city: string) {
        await this.addressInput.fill(address);

        // Select state and city
        await this.stateDropdown.selectOption({ label: state });
        await this.cityDropdown.selectOption({ label: city });
    }

    async submitForm() {
        await this.submitButton.click();
    }
}

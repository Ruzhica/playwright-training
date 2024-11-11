// DatePickerPage.ts
import { Page, Locator } from '@playwright/test';

export class DatePickerPage {
    readonly page: Page;
    readonly dateInput: Locator;
    readonly timeInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dateInput = page.locator('#datePickerMonthYearInput'); 
        this.timeInput = page.locator('#timePicker'); 
    }

    // Select a date from the date picker
    async selectDate(date: string) {
        await this.dateInput.click();
        await this.page.locator(`.react-datepicker__day--0${date}`).click(); 
    }

    // Select a time from the time picker
    async selectTime(time: string) {
        await this.timeInput.click();
        await this.page.locator(`input[type="time"]`).fill(time); 
    }

    // Get the selected date
    async getSelectedDate() {
        return await this.dateInput.inputValue();
    }

    // Get the selected time
    async getSelectedTime() {
        return await this.timeInput.inputValue();
    }
}

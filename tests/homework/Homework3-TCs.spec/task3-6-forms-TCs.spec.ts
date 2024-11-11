// test.ts
import { test, expect } from '@playwright/test';
import { FormPage } from '../pages-demoQA/forms-page';

test('Fill out and submit automation practice form', async ({ page }) => {
    const formPage = new FormPage(page);
    
    // Open the form page
    await page.goto('https://demoqa.com/automation-practice-form');
    
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'john.doe@example.com';
    const gender = 'Male';
    const mobile = '1234567890';
    await formPage.fillPersonalDetails(firstName, lastName, email, gender, mobile);
    
    const day = '01';
    const month = '0';  
    const year = '1990';
    await formPage.fillDateOfBirth(day, month, year);
    
    const subjects = ['Math', 'English'];
    await formPage.fillSubjects(subjects);
    
    const hobbies = ['Sports', 'Reading'];
    await formPage.selectHobbies(hobbies);
    
    const address = '1234 Main St, Cityville';
    const state = 'Uttar Pradesh';
    const city = 'Agra';
    await formPage.fillAddress(address, state, city);
    
    await formPage.submitForm();
    
    const confirmationMessage = await page.locator('.modal-content').innerText();
    expect(confirmationMessage).toContain('Thanks for submitting the form');
});

// test.ts
import { test, expect } from '@playwright/test';
import { DatePickerPage } from '../pages-demoQA/dateTimePicker-page';
import { SliderPage } from '../pages-demoQA/slider-page';
import { ProgressBarPage } from '../pages-demoQA/progressBarr-page';
import { ToolTipsPage } from '../pages-demoQA/toolTips-page';
import { SelectMenuPage } from '../pages-demoQA/selectMenu-page';

test('Select date and time from the Date Picker', async ({ page }) => {
    const datePickerPage = new DatePickerPage(page);

    await page.goto('https://demoqa.com/date-picker');

    await datePickerPage.selectDate('15');
    const selectedDate = await datePickerPage.getSelectedDate();
    expect(selectedDate).toBe('01/15/2024'); 
    await datePickerPage.selectTime('12:30');
    const selectedTime = await datePickerPage.getSelectedTime();
    expect(selectedTime).toBe('12:30'); 
});


test('Move the slider and validate the number displayed', async ({ page }) => {
    const sliderPage = new SliderPage(page);

    await page.goto('https://demoqa.com/slider');

    const targetValue = 50;
    await sliderPage.moveSlider(targetValue);
    const displayedValue = await sliderPage.getSliderValue();

    expect(displayedValue).toBe(targetValue.toString()); 
    const targetValue2 = 75;
    await sliderPage.moveSlider(targetValue2);
    const displayedValue2 = await sliderPage.getSliderValue();

    expect(displayedValue2).toBe(targetValue2.toString()); 
});

test('Test the progress bar on Progress Bar page', async ({ page }) => {
    const progressBarPage = new ProgressBarPage(page);

    await page.goto('https://demoqa.com/progress-bar');

    await progressBarPage.startProgressBar();

    let progressComplete = false;
    while (!progressComplete) {
        await page.waitForTimeout(500); 
        progressComplete = await progressBarPage.isProgressComplete(); 
    }

    const percentage = await progressBarPage.getProgressPercentage();
    expect(percentage).toBe(100); 

    await progressBarPage.stopProgressBar();

    const finalPercentage = await progressBarPage.getProgressPercentage();
    expect(finalPercentage).toBe(100); 
});


test('Test hover and tooltip on Tool Tips page', async ({ page }) => {
    const toolTipsPage = new ToolTipsPage(page);

    await page.goto('https://demoqa.com/tool-tips');

    await toolTipsPage.hoverOverButton();

    const tooltipText = await toolTipsPage.getTooltipText();
    expect(tooltipText).toBe('You hovered over the Button'); 

    
    await page.waitForTimeout(1000); 
});

test('Test selecting options from Select Menu', async ({ page }) => {
    const selectMenuPage = new SelectMenuPage(page);

    await page.goto('https://demoqa.com/select-menu');

    const singleSelectOption = 'Option 1';
    await selectMenuPage.selectSingleOption(singleSelectOption);
    const selectedSingleOption = await selectMenuPage.getSelectedOption();
    expect(selectedSingleOption).toBe(singleSelectOption); 

    const states = ['NCR', 'Uttar Pradesh'];
    await selectMenuPage.selectMultiState(states);
    
    const selectedStates = await page.locator('#state').inputValue();
    expect(selectedStates).toContain(states[0]); 
    expect(selectedStates).toContain(states[1]); 

    const colors = ['Blue', 'Green'];
    await selectMenuPage.selectMultiColor(colors);

    const selectedColors = await page.locator('#color').inputValue();
    expect(selectedColors).toContain(colors[0]); 
    expect(selectedColors).toContain(colors[1]); 
});



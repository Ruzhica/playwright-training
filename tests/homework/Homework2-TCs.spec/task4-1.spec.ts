// Task 4: Create your own test that will use parameterized locators and data from json files;

import {test, expect } from '@playwright/test';
import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators-demoQA/elementsDemoQA.json', 'utf-8'));
const home = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators-demoQA/home.json', 'utf-8'));
const elements = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/data/locators-demoQA/elements.json', 'utf-8'));



data1.forEach((elementsDemoQA) => {
    test(`test ${elementsDemoQA.fullName} ${elementsDemoQA.email}`, async ({ page }) => {
        await page.goto ('https://demoqa.com/');
        await expect(page.getByRole('heading', { name: elements.elements })).toBeVisible();
        await page.getByText(elements.getTextBox).click();
        await page.getByPlaceholder(elements.fullName).fill(data1.fullName);
        await page.getByPlaceholder(elements.email).fill(data1.email);
        await page.getByPlaceholder(elements.currentAddress).fill(data1.currentAddress);
        await page.locator(elements.permanentAddress).fill(data1.permanentAddress);
        await expect(page.getByRole(elements.submitBtn).click());
    });
});


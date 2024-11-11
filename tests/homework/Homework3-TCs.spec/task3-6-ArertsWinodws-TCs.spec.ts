// test.ts
import { test, expect } from '@playwright/test';
import { BrowserWindowsPage } from '../pages-demoQA/browserWindows-page';
import { AlertsPage } from '../pages-demoQA/alerts-page';
import { ModalDialogsPage } from '../pages-demoQA/modalDialogs-page';



test('Test Browser Windows actions', async ({ page }) => {
    const browserWindowsPage = new BrowserWindowsPage(page);

    // Step 1: Navigate to the page
    await page.goto('https://demoqa.com/browser-windows');

    // Step 2: Open a new tab
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'), // Listen for the new tab to be opened
        browserWindowsPage.openNewTab(), // Click the button to open a new tab
    ]);

    // Step 3: Validate that the new tab has the correct title
    expect(await newTab.title()).toBe('ToolsQA');

    // Close the new tab and return to the main page
    await newTab.close();

    // Step 4: Open a new window
    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'), // Listen for the new window to be opened
        browserWindowsPage.openNewWindow(), // Click the button to open a new window
    ]);

    // Step 5: Validate that the new window has the correct title
    expect(await newWindow.title()).toBe('ToolsQA');

    // Close the new window and return to the main page
    await newWindow.close();

    // Step 6: Open a new window with a message
    const [newMessageWindow] = await Promise.all([
        page.waitForEvent('popup'), // Listen for the new window with the message
        browserWindowsPage.openNewWindowWithMessage(), // Click the button to open the new message window
    ]);

    // Step 7: Validate that the message window contains the expected text
    const messageText = await newMessageWindow.locator('body').innerText();
    expect(messageText).toContain('This is a sample page');

    // Close the message window and return to the main page
    await newMessageWindow.close();
});


test('Test all alerts on the Alerts page', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    
    await page.goto('https://demoqa.com/alerts');
    await alertsPage.triggerAlert();
    const alertMessage = await page.locator('.modal-content').innerText();
    expect(alertMessage).toContain('You clicked a button');
    
    await page.locator('.btn-close').click();
    await alertsPage.triggerConfirmAlert(true);
    let resultMessage = await alertsPage.getResultMessage();
    expect(resultMessage).toBe('You selected Ok');

    await alertsPage.triggerConfirmAlert(false);
    resultMessage = await alertsPage.getResultMessage();
    expect(resultMessage).toBe('You selected Cancel');

    const inputText = 'Playwright Test Input';
    await alertsPage.triggerPromptAlert(inputText);
    resultMessage = await alertsPage.getResultMessage();
    expect(resultMessage).toBe(`You entered ${inputText}`);
});

test('Test small and big dialogs on Modal Dialogs page', async ({ page }) => {
    const modalDialogsPage = new ModalDialogsPage(page);

    await page.goto('https://demoqa.com/modal-dialogs');
    await modalDialogsPage.openSmallDialog();
    const smallDialogContent = await modalDialogsPage.getSmallDialogContent();
    expect(smallDialogContent).toContain('This is a small modal.');

    await modalDialogsPage.closeSmallDialog();

    await modalDialogsPage.openBigDialog();
    const bigDialogContent = await modalDialogsPage.getBigDialogContent();
    expect(bigDialogContent).toContain('This is a large modal.');

    await modalDialogsPage.closeBigDialog();
});
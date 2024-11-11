import { Page, Locator } from '@playwright/test';

export class CheckboxPage {
  readonly page: Page;
  readonly checkboxExpandButton: Locator;
  readonly checkboxItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkboxExpandButton = page.locator('.rct-option-expand-all'); 
    this.checkboxItem = page.locator('.rct-node-leaf > .rct-checkbox'); 
  }

  async navigateToCheckboxPage() {
    await this.page.goto('https://demoqa.com/checkbox');
  }

  async expandCheckboxItems() {
    await this.checkboxExpandButton.click();
  }

  async selectCheckbox() {
    await this.checkboxItem.click();
  }

  async isCheckboxSelected(): Promise<boolean> {
    return await this.checkboxItem.isChecked();
  }
}

import { Page } from '@playwright/test';

export class TextBoxPage {
  readonly page: Page;
  
  readonly fullNameInput = '#userName';
  readonly emailInput = '#userEmail';
  readonly currentAddressInput = '#currentAddress';
  readonly permanentAddressInput = '#permanentAddress';
  readonly submitButton = '#submit';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToTextBox() {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.page.fill(this.fullNameInput, fullName);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.currentAddressInput, currentAddress);
    await this.page.fill(this.permanentAddressInput, permanentAddress);
    await this.page.click(this.submitButton);
  }
}

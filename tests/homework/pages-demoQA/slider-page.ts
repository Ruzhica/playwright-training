// SliderPage.ts
import { Page, Locator } from '@playwright/test';

export class SliderPage {
    readonly page: Page;
    readonly slider: Locator;
    readonly sliderValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.slider = page.locator('#slider'); 
        this.sliderValue = page.locator('.range-slider .value'); 
    }

    async moveSlider(value: number) {
        const sliderWidth = await this.slider.boundingBox();
        const newXPosition = sliderWidth.width * (value / 100); 
        await this.slider.dragTo({ x: newXPosition, y: sliderWidth.height / 2 });
    }

    async getSliderValue() {
        return await this.sliderValue.innerText();
    }
}

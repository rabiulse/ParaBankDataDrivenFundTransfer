import { expect, Locator, Page } from '@playwright/test';

export class BasePage {

    constructor(protected page: Page) { }

    async click(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async fill(locator: Locator, value: string | number) {
    await locator.waitFor({ state: 'visible' });
    // Force convert the value to a string so Playwright can type it into the input field
    await locator.fill(String(value));
}

    async select(locator: Locator, value: string) {
        await locator.selectOption(String(value));
    }

    async getText(locator: Locator) {
        return (await locator.textContent()) ?? '';
    }

    async waitForPage() {
        await this.page.waitForLoadState('networkidle');
    }

    async verifyTitle(title: RegExp) {
        await expect(this.page).toHaveTitle(title);
    }

    async screenshot(name: string) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }
}
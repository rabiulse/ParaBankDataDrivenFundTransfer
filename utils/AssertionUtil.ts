import { expect, Locator, Page } from '@playwright/test';

export class AssertionUtil {

    static async verifyTitle(
        page: Page,
        title: RegExp
    ) {

        await expect(page)

            .toHaveTitle(title);

    }

    static async verifyVisible(
        locator: Locator
    ) {

        await expect(locator)

            .toBeVisible();

    }

    static async verifyText(
        locator: Locator,
        expected: string
    ) {

        await expect(locator)

            .toContainText(expected);

    }

    static async verifyURL(
        page: Page,
        url: string
    ) {

        await expect(page)

            .toHaveURL(url);

    }

}
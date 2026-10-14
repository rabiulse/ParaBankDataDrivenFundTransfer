import { Locator, Page } from '@playwright/test';

export class WaitUtil {

    static async waitForPage(page: Page) {

        await page.waitForLoadState('networkidle');

    }

    static async waitForVisible(locator: Locator) {

        await locator.waitFor({

            state: 'visible'

        });

    }

    static async waitForHidden(locator: Locator) {

        await locator.waitFor({

            state: 'hidden'

        });

    }

    static async wait(seconds: number) {

        await new Promise(resolve =>

            setTimeout(resolve, seconds * 1000)

        );

    }

}
import { Page } from '@playwright/test';

export class BrowserUtil {

    static async maximize(page: Page) {

        await page.setViewportSize({

            width: 1920,

            height: 1080

        });

    }

    static async refresh(page: Page) {

        await page.reload();

    }

    static async back(page: Page) {

        await page.goBack();

    }

    static async forward(page: Page) {

        await page.goForward();

    }

}
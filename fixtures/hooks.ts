import { test as base } from './page.fixture';

import { Logger } from '../utils/Logger';

import { ScreenshotUtil } from '../utils/ScreenshotUtil';

export const test = base;

test.beforeAll(async () => {

    Logger.info("============== TEST EXECUTION STARTED ==============");

});

test.beforeEach(async ({ page }, testInfo) => {

    Logger.info(`Starting Test : ${testInfo.title}`);

    await page.goto('/');

});

test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        await ScreenshotUtil.capture(

            page,

            testInfo.title.replace(/\s/g, "_")

        );

        Logger.error(`Test Failed : ${testInfo.title}`);

    }

    else {

        Logger.info(`Test Passed : ${testInfo.title}`);

    }

});

test.afterAll(async () => {

    Logger.info("============== TEST EXECUTION COMPLETED ==============");

});

export { expect } from '@playwright/test';
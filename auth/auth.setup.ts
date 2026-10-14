import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from '../config/env';

const authFile = 'auth/storageState.json';

setup('Authenticate User', async ({ page }) => {

    const login = new LoginPage(page);

    await login.open();

    await login.login(
        ENV.USERNAME,
        ENV.PASSWORD
    );

    await expect(page.locator('text=Accounts Overview')).toBeVisible();

    await page.context().storageState({

        path: authFile

    });

});
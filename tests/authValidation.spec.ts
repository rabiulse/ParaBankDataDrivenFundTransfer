import { test, expect } from '@playwright/test';

test('Verify authenticated session', async ({ page }) => {

    await page.goto('/');

    await expect(
        page.locator('text=Accounts Overview')
    ).toBeVisible();

});
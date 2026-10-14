import { test as setup, expect } from '@playwright/test';

setup('Authenticate', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  await page.fill('input[name="username"]', process.env.USERNAMEONE!);
  await page.fill('input[name="password"]', process.env.PASSWORD!);

  await page.click('input[value="Log In"]');

  await expect(page).toHaveURL(/overview\.htm/);

  await page.context().storageState({
    path: 'auth/storageState.json'
  });
});
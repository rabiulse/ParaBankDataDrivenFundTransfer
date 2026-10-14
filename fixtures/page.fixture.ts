import { test as base } from './base.fixture';

import { LoginPage } from '../pages/LoginPage';
import { NavigationPage } from '../pages/NavigationPage';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';

type ApplicationPages = {

    loginPage: LoginPage;

    navigationPage: NavigationPage;

    accountsOverviewPage: AccountsOverviewPage;

    transferFundsPage: TransferFundsPage;

};

export const test = base.extend<ApplicationPages>({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));

    },

    navigationPage: async ({ page }, use) => {

        await use(new NavigationPage(page));

    },

    accountsOverviewPage: async ({ page }, use) => {

        await use(new AccountsOverviewPage(page));

    },

    transferFundsPage: async ({ page }, use) => {

        await use(new TransferFundsPage(page));

    }

});

export { expect } from '@playwright/test';
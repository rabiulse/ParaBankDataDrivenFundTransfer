import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NavigationPage extends BasePage {

    readonly lnkAccountsOverview: Locator;
    readonly lnkTransferFunds: Locator;
    readonly lnkBillPay: Locator;
    readonly lnkLogout: Locator;

    constructor(page: Page) {

        super(page);

        this.lnkAccountsOverview = page.locator('text=Accounts Overview');

        this.lnkTransferFunds =  this.page.locator('a[href="transfer.htm"]');

        this.lnkBillPay = page.locator('text=Bill Pay');

        this.lnkLogout = page.locator('text=Log Out');

    }

    async openAccountsOverview() {

        await this.click(this.lnkAccountsOverview);

    }

    async openTransferFunds() {

        await this.click(this.lnkTransferFunds);

    }

    async logout() {

        await this.click(this.lnkLogout);

    }

}
import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountsOverviewPage extends BasePage {

    readonly tblAccounts: Locator;
    readonly rowsAccounts: Locator;

    constructor(page: Page) {

        super(page);

        this.tblAccounts = page.locator('#accountTable');

        this.rowsAccounts = page.locator('#accountTable tbody tr');

    }

    async getTotalAccounts() {

        return await this.rowsAccounts.count();

    }

}
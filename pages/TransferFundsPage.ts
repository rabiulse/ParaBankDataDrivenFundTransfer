import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransferFundsPage extends BasePage {

    readonly txtAmount: Locator;
    readonly ddlFromAccount: Locator;
    readonly ddlToAccount: Locator;
    readonly btnTransfer: Locator;
    readonly lblTransferComplete: Locator;

    constructor(page: Page) {

        super(page);

        this.txtAmount = page.locator("#amount");
        this.ddlFromAccount = page.locator("#fromAccountId");
        this.ddlToAccount = page.locator("#toAccountId");
        this.btnTransfer = page.locator("input[value='Transfer']");
        this.lblTransferComplete = page.locator("#showResult");

    }

    async transferFunds(
        amount: string,
        fromAccount: string,
        toAccount: string
    ) {

        await this.fill(this.txtAmount, amount);

        await this.select(this.ddlFromAccount, fromAccount);

        await this.select(this.ddlToAccount, toAccount);

        await this.click(this.btnTransfer);

    }

    async getTransferMessage() {

        return await this.getText(this.lblTransferComplete);

    }

}
import { test, expect } from '../fixtures';

import { TransferData } from '../models/TransferData';

import { ExcelHelper } from '../utils/ExcelHelper';

import { Logger } from '../utils/Logger';

import { ScreenshotUtil } from '../utils/ScreenshotUtil';

const transferData =
ExcelHelper.getTestData<TransferData>(
'data/transferData.xlsx',
'TransferFunds'
);

for (const data of transferData) {

if (data.Execute !== 'Y')
continue;

test(

`${data.TestCase} - Fund Transfer`,

async ({

navigationPage,

transferFundsPage,

page

}) => {

Logger.info(`Executing ${data.TestCase}`);

await navigationPage.openTransferFunds();

await transferFundsPage.transferFunds(

data.Amount,

data.FromAccount,

data.ToAccount

);

const actual =
await transferFundsPage.getTransferMessage();

expect(actual).toContain(data.Expected);

await ScreenshotUtil.capture(

page,

data.TestCase

);

Logger.info(`${data.TestCase} Completed`);

});

}
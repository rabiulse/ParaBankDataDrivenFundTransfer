import { ExcelReader } from './ExcelReader';

export class ExcelHelper {

    static getTestData<T>(
        filePath: string,
        sheet: string
    ): T[] {

        return ExcelReader.read<T>(
            filePath,
            sheet
        );

    }

}
import * as XLSX from 'xlsx';

export class ExcelReader {

    static read<T>(
        filePath: string,
        sheetName: string
    ): T[] {

        const workbook = XLSX.readFile(filePath);

        const worksheet = workbook.Sheets[sheetName];

        return XLSX.utils.sheet_to_json<T>(worksheet, {
            defval: ''
        });

    }

}
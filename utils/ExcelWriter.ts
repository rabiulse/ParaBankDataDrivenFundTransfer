import * as XLSX from 'xlsx';

export class ExcelWriter {

    static write(
        file: string,
        data: any[]
    ) {

        const workbook = XLSX.utils.book_new();

        const worksheet = XLSX.utils.json_to_sheet(data);

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Result"
        );

        XLSX.writeFile(
            workbook,
            file
        );

    }

}
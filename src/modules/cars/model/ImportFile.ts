class ImportFile {
    name?: string;
    records: Array<String | Number>

    constructor(name: string, records: Array<String | Number>) {
        this.name = name;
        this.records = records;
    }
}
import { ImportFileCategoryRepositories } from "../modules/cars/repositories/ImportFileCategoryRepositories";
import { parse } from 'csv-parse';
import fs from "fs";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepositories";

interface IimportCategory {
    name: string;
    description: string;
}

class ImportFileCategoryService {
    private categoriesRepository: CategoriesRepository;

    constructor(categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(category => {
            const { name, description } = category;

            const existCategory = this.categoriesRepository.findByName(name);
            if(!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description
                });
            }
            // console.log(existCategory); DEBUG
        });
    }

    private loadCategories(file: Express.Multer.File): Promise<IimportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const records: IimportCategory[] = [];
            const parseFile = parse({
                delimiter: ','
            });

            stream.pipe(parseFile);

            parseFile.on("data", (line) => {
                const [name, description] = line;
                records.push({
                    name,
                    description
                });
            });

            parseFile.on('error', (error) => {
                reject(error);
            });

            parseFile.on('end', () => {
                resolve(records);
            });
        });
    }
}

export { ImportFileCategoryService };

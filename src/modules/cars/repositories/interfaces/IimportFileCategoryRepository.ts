import CategoryClass from "../../model/Category";
import { ICreateCategoryDTO } from "./ICategoryRepository";

/**
 *
 *
 * @interface IimportFileDTO
 */
interface IimportFileDTO {
    name: string;
    file: string;
}

/**
 *
 *
 * @interface IimportFileCategoryRepository
 */
interface IimportFileCategoryRepository {
    findByName(name: string): CategoryClass | undefined;
    listCategory() : CategoryClass[];
    create({ name, description} : ICreateCategoryDTO): void;
}


export { IimportFileDTO, IimportFileCategoryRepository };
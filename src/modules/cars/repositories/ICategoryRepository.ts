import CategoryClass from "../model/Category";

/**
 *
 *
 * @interface ICreateCategoryDTO
 */
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

/**
 *
 *
 * @interface ICategoryRepository
 */
interface ICategoryRepository {
    findByName(name: string): CategoryClass | undefined;
    listCategory() : CategoryClass[];
    create({ name, description} : ICreateCategoryDTO): void;
} 

export { ICategoryRepository, ICreateCategoryDTO };
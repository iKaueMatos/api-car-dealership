import CategoryClass from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./interfaces/ICategoryRepository";

// DTO => Date transfer object
class CategoriesRepository implements ICategoryRepository {
    private categories: CategoryClass[];

    constructor() {
        this.categories = [];
    }

    /**
     *
     * create category name and description
     * @param {ICreateCategoryDTO} { name, description }
     * @memberof CategoriesRepository
     */
    create({ name, description }: ICreateCategoryDTO): void {
        const category = new CategoryClass(  name, description );
        this.categories.push(category);
    }

    /**
     *
     * return list categorys available
     * @return {*}  {CategoryClass[]}
     * @memberof CategoriesRepository
     */
    listCategory(): CategoryClass[] {
        return this.categories;
    }

    /**
     *
     * verification category aldreary exists
     * @param {string} name
     * @return {*}  {(CategoryClass | undefined)}
     * @memberof CategoriesRepository
     */
    findByName(name: string): CategoryClass | undefined {
        const category = this.categories.find((category) => category.name === name);
        return category;
    }
}

export { CategoriesRepository };
import CategoryClass from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

// DTO => Date transfer object
class CategoriesRepository {
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
    list(): CategoryClass[] {
        return this.categories;
    }
}

export { CategoriesRepository };
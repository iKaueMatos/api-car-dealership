import CategoryClass from "../model/Category";
import { CategoriesRepository } from "./CategoriesRepositories";
import { ICreateCategoryDTO } from "./interfaces/ICategoryRepository";
import { IimportFileCategoryRepository } from "./interfaces/IimportFileCategoryRepository";

class ImportFileCategoryRepositories implements IimportFileCategoryRepository {
    private categories : CategoryClass[];
    private static INSTANCE: ImportFileCategoryRepositories;
    
    private constructor() {
        this.categories = [];
    }

    /**
     *
     * create instance or return instance exists
     * @param {ImportFileCategoryRepositories} { instance }
     * @return ImportFileCategoryRepositories.INSTANCE
     */
    public static getInstance() : ImportFileCategoryRepositories {
        if (!ImportFileCategoryRepositories.INSTANCE) {
            ImportFileCategoryRepositories.INSTANCE = new ImportFileCategoryRepositories();
        }
        
        return ImportFileCategoryRepositories.INSTANCE;
    }

      /**
     *
     * verification category aldreary exists
     * @param {string} name
     * @return {*}  {(CategoryClass | undefined)}
     * @memberof CategoriesRepository
     */
      public findByName(name: string): CategoryClass | undefined {
        const category = this.categories.find((category) => category.name === name);
        return category;
    }

      /**
     *
     * create category name and description
     * @param {ICreateCategoryDTO} { name, description }
     * @memberof CategoriesRepository
     */
      public create({ name, description }: ICreateCategoryDTO): void {
        const category = new CategoryClass(  name, description );
        this.categories.push(category);
    }

    /**
     *
     * return list categorys available
     * @return {*}  {CategoryClass[]}
     * @memberof CategoriesRepository
     */
    public listCategory(): CategoryClass[] {
        return this.categories;
    }
}

export { ImportFileCategoryRepositories };
import CategoryClass from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./interfaces/ICategoryRepository";

// DTO => Date transfer object
class CategoriesRepository implements ICategoryRepository {
    private categories: CategoryClass[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    /**
     *
     * create instance or return instance exists
     * @param {CategoriesRepository} { instance }
     * @return CategoriesRepository.INSTANCE
     */
    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE; 
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
}

export { CategoriesRepository };
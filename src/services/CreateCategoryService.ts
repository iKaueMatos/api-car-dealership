import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepositories";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    private categoriesRepository: CategoriesRepository;

    constructor(categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

   /**
    *
    * return category create
    * @param {IRequest} {name, description}
    * @memberof CreateCategoryService
    */
    execute({name, description} :IRequest) : void { 
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    
        if (categoryAlreadyExists) {
           throw new Error("category already exists");
        }
    
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryService };
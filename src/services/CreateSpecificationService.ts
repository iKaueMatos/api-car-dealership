import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepositories";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    private specificationRepository: SpecificationRepository;

    constructor(specificationRepository: SpecificationRepository) {
        this.specificationRepository = specificationRepository;
    }

   /**
    *
    * return specification create
    * @param {IRequest} {name, description}
    * @memberof CreateCategoryService
    */
    execute({name, description} :IRequest) : void { 
        const specificationAlreadyExists = this.specificationRepository.findByName(name);
    
        if (specificationAlreadyExists) {
           throw new Error("specification already exists");
        }
    
        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationService };
import { SpecificationRepositories } from "../modules/cars/repositories/SpecificationRepositories";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    private specificationRepository: SpecificationRepositories;

    constructor(specificationRepository: SpecificationRepositories) {
        this.specificationRepository = specificationRepository;
    }

    /**
     *
     * return category create
     * @param {IRequest} {name, description}
     * @memberof CreateCategoryService
     */
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("category already exists");
        }

        this.create({ name, description })
    }
}
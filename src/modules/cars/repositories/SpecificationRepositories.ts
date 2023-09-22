import { Specification } from "../model/Specification";
import { CategoriesRepository } from "./CategoriesRepositories";
import { ICreateSpecificationDTO, ISpecicationRespository } from "./interfaces/ISpecificationRepository";

// DTO => Date transfer object
class SpecificationRepository implements ISpecicationRespository {
    private specification: Specification[];

    private static INSTANCE : SpecificationRepository;

    private constructor() {
        this.specification = [];
    }

    /**
     *
     * create instance or return instance exists
     * @param {ISpecicationRespository} { instance }
     * @return specificationRepository.INSTANCE
     */
    public static getInstance() : SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
           SpecificationRepository.INSTANCE = new SpecificationRepository();
        }

        return SpecificationRepository.INSTANCE;
    }

    /**
     *
     * create category name and description
     * @param {ICreateSpecificationDTO} { name, description }
     * @memberof Specification
     */
    public create({ name, description }: ICreateSpecificationDTO ): void {
        const category = new Specification(  name, description );
        this.specification.push(category);
    }

    /**
     *
     * return list specification available
     * @return {*}  {Specification[]}
     * @memberof SpecificationRepository
     */
    public listSpecification(): Specification[] {
        return this.specification;
    }

    /**
     *
     * verification specification aldreary exists
     * @param {string} name
     * @return {*}  {(Specification | undefined)}
     * @memberof ISpecicationRespository
     */
    public findByName(name: string): Specification | undefined {
        const specification = this.specification.find((specifications) => specifications.name === name);
        return specification;
    }
}

export { SpecificationRepository };
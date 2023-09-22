import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecicationRespository } from "./interfaces/ISpecificationRepository";

// DTO => Date transfer object
class SpecificationRepository implements ISpecicationRespository {
    private specification: Specification[];

    constructor() {
        this.specification = [];
    }

    /**
     *
     * create category name and description
     * @param {ICreateSpecificationDTO} { name, description }
     * @memberof Specification
     */
    create({ name, description }: ICreateSpecificationDTO ): void {
        const category = new Specification(  name, description );
        this.specification.push(category);
    }

    /**
     *
     * return list specification available
     * @return {*}  {Specification[]}
     * @memberof SpecificationRepository
     */
    listSpecification(): Specification[] {
        return this.specification;
    }

    /**
     *
     * verification specification aldreary exists
     * @param {string} name
     * @return {*}  {(Specification | undefined)}
     * @memberof ISpecicationRespository
     */
    findByName(name: string): Specification | undefined {
        const specification = this.specification.find((specifications) => specifications.name === name);
        return specification;
    }
}

export { SpecificationRepository };
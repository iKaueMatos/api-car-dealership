import { Specification } from "../model/Specification";
import { ISpecicationRespository, ICreateSpecificationDTO } from "./ISpecificationRepository";

class SpecificationRepositories implements ISpecicationRespository {
    private specifications : Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification(name, description);
    }

    findByName({name: string} : Specification | undefined) {
        const specification = this.specifications.find((specification) => specifications.name === name);
        return specification;
    }
}

export { SpecificationRepositories };
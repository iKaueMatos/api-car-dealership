import { Specification } from "../../model/Specification";


/**
 *
 *
 * @interface ICreateSpecificationDTO
 */
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

/**
 *
 *
 * @interface ISpecicationRespository
 */
interface ISpecicationRespository {
    create({ name, description } : ICreateSpecificationDTO) : void;
    findByName(name: string): Specification | undefined;
    listSpecification() : Specification[];
}

export  { ISpecicationRespository, ICreateSpecificationDTO  }
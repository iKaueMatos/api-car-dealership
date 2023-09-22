import { Response, Request } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepositories";
import { CreateSpecificationService } from "../services/CreateSpecificationService";

const specificationRepository = new SpecificationRepository();

/**
 * Response create specification
 * @param {CreateSpecificationService} CreateSpecificationService
 * @param {SpecificationRepository} SpecificationRepository
 * @return create specification
 */
export const createSpecification = (request: Request, response: Response) => {
    const { name, description } = request.body;
    const createSpeficiationService = new CreateSpecificationService(specificationRepository);
    createSpeficiationService.execute({name, description})

    response.status(201).send();
};

/**
 * Response list category
 * @param {SpecificationRepository} listCategoryAll
 * @return list specification exist
 */
export const listSpecification = (request: Request, response: Response) => {
    const listSpecificationAll = specificationRepository.listSpecification();
    response.json(listSpecificationAll).status(200);
};
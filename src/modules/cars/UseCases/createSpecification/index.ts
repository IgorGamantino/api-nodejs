import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { SpecificationsRepository } from '../../repositories/Specification/SpecificationsRepository'

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController }
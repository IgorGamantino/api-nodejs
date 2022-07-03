import { Router } from 'express'
// import { SpecificationsRepository } from '../modules/cars/repositories/Specification/SpecificationsRepository';
import { CreateSpecificationController } from '../modules/cars/UseCases/createSpecification/CreateSpecificationController';

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post('/', createSpecificationController.handle)

export { specificationRoutes };
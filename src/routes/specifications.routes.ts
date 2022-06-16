import { Router } from 'express'
// import { SpecificationsRepository } from '../modules/cars/repositories/Specification/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/UseCases/createSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})


export { specificationRoutes };
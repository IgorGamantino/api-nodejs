import { Router, } from 'express';
import { CategoryRepository } from '../modules/cars/repositories/Categories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/UseCases/CreateCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();


categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
});

categoriesRoutes.get('/', (request, response) => {
  const listCategory = categoriesRepository.list();

  return response.status(200).json(listCategory);
})

export { categoriesRoutes };

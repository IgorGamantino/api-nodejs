import { Router, } from 'express';
import { CategoryRepository } from '../modules/cars/repositories/Categories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();


categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description })
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const listCategory = categoriesRepository.list();

  return response.status(200).json(listCategory);
})

export { categoriesRoutes };

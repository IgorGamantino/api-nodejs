
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CategoryRepository } from '../../repositories/Categories/CategoriesRepository';

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoryRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController

}


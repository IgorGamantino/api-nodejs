import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { CategoryRepository } from '../../repositories/Categories/CategoriesRepository'

const categoriesRepository = new CategoryRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController }
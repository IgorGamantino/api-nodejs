import { Router, } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/UseCases/createCategory';
import { importCategoryController } from '../modules/cars/UseCases/importCategory';
import { listCategoriesController } from '../modules/cars/UseCases/listCategories';

const uploadFile = multer({
  dest: './tmp'
});

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController().handle(request, response)
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post('/import', uploadFile.single('file'), (request, response) => {
  importCategoryController.handle(request, response)
})


export { categoriesRoutes };

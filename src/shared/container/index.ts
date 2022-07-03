import { container } from 'tsyringe';

import { CategoryRepository } from '../../modules/cars/repositories/Categories/CategoriesRepository';
import { ICategoryRepository } from '../../modules/cars/repositories/Categories/ICategoryRepository';

import { SpecificationsRepository } from '../../modules/cars/repositories/Specification/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/Specification/ISpecificationsRepository';

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationRepository",
  SpecificationsRepository
);
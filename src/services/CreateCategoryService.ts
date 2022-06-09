import { ICategoryRepository } from "../repositories/Categories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {

  constructor(private categoriesRepository: ICategoryRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByNameCategory(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    this.categoriesRepository.create({ name, description });
  }
}


export { CreateCategoryService }
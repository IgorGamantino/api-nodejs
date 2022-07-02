import { ICategoryRepository } from "../../repositories/Categories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {

  constructor(private categoriesRepository: ICategoryRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByNameCategory(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    await this.categoriesRepository.create({ name, description });
  }
}


export { CreateCategoryUseCase }
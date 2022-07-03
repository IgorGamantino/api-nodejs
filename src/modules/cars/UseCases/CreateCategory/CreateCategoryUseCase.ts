import { inject, injectable } from "tsyringe";
// import { AppError } from "../../../../errors/AppError";
import { ICategoryRepository } from '../../repositories/Categories/ICategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByNameCategory(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!")
    };

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };
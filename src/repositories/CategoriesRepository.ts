
import { Category } from "../model/Category";

interface ICategoryRepositoryDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICategoryRepositoryDTO): void {
    const newCategory = new Category()

    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date(),
    })

    this.categories.push(newCategory);
  }

  list(): Category[] {
    return this.categories
  }
}

export { CategoryRepository }
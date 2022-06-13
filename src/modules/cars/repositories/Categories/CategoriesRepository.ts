
import { Category } from "../../model/Category";
import { ICategoryRepository, ICategoryRepositoryDTO } from "./ICategoryRepository";



class CategoryRepository implements ICategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoryRepository;


  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
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

  findByNameCategory(name: string): Category | undefined {
    const findByNameCategory = this.categories.find(category => category.name === name);

    return findByNameCategory;
  }


}

export { CategoryRepository }
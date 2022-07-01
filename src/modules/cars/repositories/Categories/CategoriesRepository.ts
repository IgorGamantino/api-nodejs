
import { Category } from "../../entities/Category";
import { ICategoryRepository, ICategoryRepositoryDTO } from "./ICategoryRepository";
import { getRepository, Repository } from 'typeorm'

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>

  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.repository = getRepository(Category);
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
  }

  async create({ name, description }: ICategoryRepositoryDTO): Promise<void> {

    const category = this.repository.create({ name, description })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories
  }

  async findByNameCategory(name: string): Promise<Category | undefined> {
    const findByNameCategory = this.repository.findOne({ name })

    return findByNameCategory;
  }


}

export { CategoryRepository }
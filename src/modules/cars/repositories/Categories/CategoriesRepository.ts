
import { Category } from "../../entities/Category";
import { ICategoryRepository, ICategoryRepositoryDTO } from "./ICategoryRepository";
import { getRepository, Repository } from 'typeorm'

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICategoryRepositoryDTO): Promise<void> {

    const category = this.repository.create({
      description,
      name
    });

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
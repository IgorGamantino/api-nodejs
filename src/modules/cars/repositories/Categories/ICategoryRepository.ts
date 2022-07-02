import { Category } from '../../entities/Category'

interface ICategoryRepositoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByNameCategory(name: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
  create({ name, description }: ICategoryRepositoryDTO): Promise<void>;
}

export { ICategoryRepository, ICategoryRepositoryDTO }
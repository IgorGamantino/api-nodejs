import { Category } from '../../model/Category'

interface ICategoryRepositoryDTO {
  name: string;
  description: string;
}


interface ICategoryRepository {
  findByNameCategory(name: string): Category | undefined;
  list(): Category[];
  create({ name, description }: ICategoryRepositoryDTO): void;
}


export { ICategoryRepository, ICategoryRepositoryDTO }
import { Category } from "../../model/Category";
import { ICategoryRepository, ICategoryRepositoryDTO } from "./ICategoryRepository";

class PostgresCategoriesRepository implements ICategoryRepository {
  findByNameCategory(name: string): Category | undefined {
    return null
  }
  list(): Category[] {
    return null
  }
  create({ name, description }: ICategoryRepositoryDTO): void {
    return null
  }

}

export { PostgresCategoriesRepository };
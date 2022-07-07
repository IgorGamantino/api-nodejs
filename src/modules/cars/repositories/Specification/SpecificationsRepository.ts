import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";
import { getRepository, Repository } from 'typeorm'




class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>
  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {

    const specification = this.repository.create({
      description,
      name
    });

    await this.repository.save(specification)
  }

  async findByNameSpecification(name: string): Promise<Specification | undefined> {
    const findByNameSpecification = this.repository.findOne({ name });

    return findByNameSpecification;
  }

}



export { SpecificationsRepository } 
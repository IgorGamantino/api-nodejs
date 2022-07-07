import { Specification } from "../../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByNameSpecification(name: string): Promise<Specification | undefined>;
}


export { ISpecificationsRepository, ICreateSpecificationDTO }
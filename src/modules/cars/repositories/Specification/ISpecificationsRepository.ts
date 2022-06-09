import { Specification } from "../../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByNameSpecification(name: string): Specification | undefined;
}


export { ISpecificationsRepository, ICreateSpecificationDTO }
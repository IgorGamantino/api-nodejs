import { ISpecificationsRepository } from "../../repositories/Specification/ISpecificationsRepository"

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByNameSpecification(name)

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!')
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase }
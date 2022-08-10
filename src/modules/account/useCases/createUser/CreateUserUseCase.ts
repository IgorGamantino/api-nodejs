import { inject, injectable } from "tsyringe";

import { hash } from 'bcryptjs'

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";


@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {

    const checkUserAlreadyExists = await this.usersRepository.findByEmail(email);

    if (checkUserAlreadyExists) {
      throw new AppError('User already exists');
    }

    const hashedPassword = await hash(password, 8)

    await this.usersRepository.create({
      name,
      password: hashedPassword,
      email,
      driver_license
    });
  }

}



export { CreateUserUseCase } 
import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";


class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }


  async create({ name, email, password, driver_license, avatar, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
      avatar,
      id
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email })
    if (user) {
      return user
    }
    return undefined
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id)
    if (user) {
      return user
    }
    return undefined
  }

}

export { UsersRepository }
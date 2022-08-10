import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password invalid");
    };

    const checkPassword = compare(password, user.password);
    console.log(checkPassword)
    if (!checkPassword) {
      throw new AppError("Email or password invalid");
    }

    const token = sign({}, "09695bfc262fef36f4e810ebac2af27e", {
      subject: user.id,
      expiresIn: "1d"
    })

    const resultUser = {
      user: {
        name: user.name,
        email,
      },
      token
    };

    return resultUser
  }
}

export { AuthenticateUserUseCase };
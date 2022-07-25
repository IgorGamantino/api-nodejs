import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";



class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, username, driver_license } = request.body;

    const createUseCase = container.resolve(CreateUserUseCase);

    await createUseCase.execute({ name, email, password, username, driver_license });

    return response.status(200).send()
  }
}

export { CreateUserController }
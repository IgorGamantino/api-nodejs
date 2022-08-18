import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/account/repositories/UsersRepository";

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError("token is missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, '09695bfc262fef36f4e810ebac2af27e') as IPayload

    const usersRepository = new UsersRepository();
    const checkUserAlreadyExists = await usersRepository.findById(user_id);

    if (!checkUserAlreadyExists) {
      throw new AppError("User not found", 401);
    };


    request.user = { id: user_id };
    next();
  }
  catch {
    throw new AppError("Invalid token", 401);
  }
}
import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { UsersRepository } from "../modules/account/repositories/UsersRepository";

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new Error("token is missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, '09695bfc262fef36f4e810ebac2af27e') as IPayload

    const usersRepository = new UsersRepository();
    const checkUserAlreadyExists = await usersRepository.findById(user_id);

    if (!checkUserAlreadyExists) {
      throw new Error("User not found");
    }

    next();
  }
  catch {
    throw new Error("Invalid token");
  }
}
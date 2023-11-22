import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/AppError"

export const ensureOwnUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    if(req.params.id != req.user.id) {
        throw new AppError('Usuário diferente', 404)
    }

   return next()
}
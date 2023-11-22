import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";


export const verifyUserEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const userRegistred = AppDataSource.getRepository(User)

    const email = await userRegistred.findBy({
        email: req.body.email
    })
    
    if(email.length > 0) {
        
        throw new AppError("E-mail já existente", 400)
    }

    next()
}
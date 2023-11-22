import { Request, Response } from "express"
import { IUserRequest } from "../../interfaces/user.interface"
import { createUserService } from "../../services/user/createUser.service"
import { listUsersServices } from "../../services/user/listUser.service"


export const createUserController = async (req: Request, res: Response) => {

    const userData: IUserRequest = req.body

    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

export const listUsersController = async (req: Request, res: Response) => {

    const users = await listUsersServices()
    return res.json(users)
}
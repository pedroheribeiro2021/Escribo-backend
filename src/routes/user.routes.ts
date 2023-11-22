import { Router } from "express";
import { createUserController, listUsersController, updateUserController } from "../controllers/user/user.controller";


export const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
userRoutes.patch('/:id', updateUserController)
import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/user/user.controller";


export const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)
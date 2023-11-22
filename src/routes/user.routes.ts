import { Router } from "express";
import { createUserController, listUsersController } from "../controllers/user/user.controller";


export const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
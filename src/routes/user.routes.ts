import { Router } from "express";
import { createUserController } from "../controllers/user/user.controller";


export const userRoutes = Router()

userRoutes.post('', createUserController)

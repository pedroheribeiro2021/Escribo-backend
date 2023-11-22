import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/user/user.controller";
import { verifyUserEmailExistsMiddleware } from "../middlewares/verifyUserEmailExists.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { verifyUsernotExistMiddleware } from "../middlewares/verifyUserNotExist.middleware";
import { ensureOwnUserMiddleware } from "../middlewares/ensureOwnUser.middleware";


export const userRoutes = Router()

userRoutes.post("", verifyUserEmailExistsMiddleware, createUserController)
userRoutes.get("", ensureAuthMiddleware, listUsersController)
userRoutes.patch("/:id", ensureAuthMiddleware, verifyUsernotExistMiddleware, ensureOwnUserMiddleware, updateUserController)
userRoutes.delete("/:id", ensureAuthMiddleware, verifyUsernotExistMiddleware, ensureOwnUserMiddleware, deleteUserController)
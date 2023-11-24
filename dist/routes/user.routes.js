/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user/user.controller");
const verifyUserEmailExists_middleware_1 = require("../middlewares/verifyUserEmailExists.middleware");
const ensureAuth_middleware_1 = require("../middlewares/ensureAuth.middleware");
const verifyUserNotExist_middleware_1 = require("../middlewares/verifyUserNotExist.middleware");
const ensureOwnUser_middleware_1 = require("../middlewares/ensureOwnUser.middleware");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post("", verifyUserEmailExists_middleware_1.verifyUserEmailExistsMiddleware, user_controller_1.createUserController);
exports.userRoutes.get("", ensureAuth_middleware_1.ensureAuthMiddleware, user_controller_1.listUsersController);
exports.userRoutes.patch("/:id", ensureAuth_middleware_1.ensureAuthMiddleware, verifyUserNotExist_middleware_1.verifyUsernotExistMiddleware, ensureOwnUser_middleware_1.ensureOwnUserMiddleware, user_controller_1.updateUserController);
exports.userRoutes.delete("/:id", ensureAuth_middleware_1.ensureAuthMiddleware, verifyUserNotExist_middleware_1.verifyUsernotExistMiddleware, ensureOwnUser_middleware_1.ensureOwnUserMiddleware, user_controller_1.deleteUserController);

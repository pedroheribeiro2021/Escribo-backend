/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.listUsersController = exports.createUserController = void 0;
const createUser_service_1 = require("../../services/user/createUser.service");
const listUser_service_1 = require("../../services/user/listUser.service");
const updateUser_service_1 = require("../../services/user/updateUser.service");
const deleteUser_service_1 = require("../../services/user/deleteUser.service");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const newUser = yield (0, createUser_service_1.createUserService)(userData);
    return res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const listUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, listUser_service_1.listUsersServices)();
    return res.json(users);
});
exports.listUsersController = listUsersController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const id = req.params.id;
    const updateUser = yield (0, updateUser_service_1.updateUserService)(userData, id);
    return res.status(200).json(updateUser);
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteUser_service_1.deleteUserService)(req.params.id);
    return res.status(204).json();
});
exports.deleteUserController = deleteUserController;

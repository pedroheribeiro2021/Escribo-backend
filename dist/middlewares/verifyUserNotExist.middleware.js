/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
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
exports.verifyUsernotExistMiddleware = void 0;
const data_source_1 = require("../data-source");
const user_entity_1 = require("../entities/user.entity");
const AppError_1 = require("../errors/AppError");
const verifyUsernotExistMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userRegistred = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const user = yield userRegistred.findOneBy({
        id: req.params.id
    });
    if (!user) {
        throw new AppError_1.AppError("Usuário não encontrado", 404);
    }
    return next();
});
exports.verifyUsernotExistMiddleware = verifyUsernotExistMiddleware;

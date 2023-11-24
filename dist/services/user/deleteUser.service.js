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
exports.deleteUserService = void 0;
const data_source_1 = require("../../data-source");
const user_entity_1 = require("../../entities/user.entity");
const phones_entity_1 = require("../../entities/phones.entity");
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const user = yield userRepository.findOne({
        where: {
            id: id
        },
        relations: {
            phones: true
        }
    });
    const phonesRepositry = data_source_1.AppDataSource.getRepository(phones_entity_1.PhoneNumber);
    const phone = yield phonesRepositry.findOneBy({
        id: user.phones.id
    });
    yield phonesRepositry.remove(phone);
    yield userRepository.remove(user);
});
exports.deleteUserService = deleteUserService;

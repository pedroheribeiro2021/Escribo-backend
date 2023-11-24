/* eslint-disable require-yield */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv");
const AppError_1 = require("../errors/AppError");
const ensureAuthMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            mensagem: "Não autorizado"
        });
    }
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            console.log(error);
            if (error.message === "invalid signature") {
                res.status(401).json({
                    mensagem: "Não autorizado"
                });
            }
            if (error.message === "jwt expired") {
                res.status(401).json({
                    mensagem: "Sessão inválida"
                });
            }
            if (error.message === "jwt must be provided") {
                res.status(401).json({
                    mensagem: "Token de acesso não fornecido"
                });
            }
            throw new AppError_1.AppError(error.message, 401);
        }
        req.user = {
            id: decoded.sub,
            token: String(token)
        };
        return next();
    });
});
exports.ensureAuthMiddleware = ensureAuthMiddleware;

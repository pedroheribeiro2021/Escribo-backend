"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(mensagem, statusCode = 400) {
        super();
        this.mensagem = mensagem,
            this.statusCode = statusCode;
    }
}
exports.AppError = AppError;

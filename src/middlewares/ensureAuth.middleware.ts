/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv"
import { AppError } from "../errors/AppError";


export const ensureAuthMiddleware = async(req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            mensagem: "Não autorizado"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            console.log(error)
            if(error.message === "invalid signature"){
                res.status(401).json({
                    mensagem: "Não autorizado"
                })
            }
            if(error.message === "jwt expired"){
                res.status(401).json({
                    mensagem: "Sessão inválida"
                })
            }
            if(error.message === "jwt must be provided"){
                res.status(401).json({
                    mensagem: "Token de acesso não fornecido"
                })
            }
            throw new AppError(error.message, 401)
        }
        

        req.user = {
            id: decoded.sub,
            token: String(token)
        }
        return next()
    })
}
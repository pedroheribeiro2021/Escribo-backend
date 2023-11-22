import { Request, Response } from "express";
import { AppError } from "./AppError";


export const handleError = async (error: Error, req: Request, res: Response) => {

    if(error instanceof AppError){
        console.log(error)
        return res.status(error.statusCode).json({
            mensagem: error.mensagem
        })
    }

    console.log(error)

    return res.status(500).json({
        mensagem: "Internal server error"
    })
}
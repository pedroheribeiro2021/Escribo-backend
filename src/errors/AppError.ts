export class AppError extends Error {
    
    statusCode: number
    mensagem: string

    constructor(mensagem: string, statusCode: number = 400) {
        super()
        this.mensagem = mensagem,
        this.statusCode = statusCode
    }
}
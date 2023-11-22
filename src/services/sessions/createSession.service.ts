import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { IUserLogin } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { compare } from "bcrypt";
import { AppError } from "../../errors/AppError";


export const createSessionService = async ({
    email,
    password,
  }: IUserLogin): Promise<object> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      email: email,
    })

    if (!user) {
        throw new AppError("Usuário e/ou senha inválidos", 404)
      }
    
      const passwordMatch = await compare(password, user.password)
    
      if (!passwordMatch) {
        throw new AppError("Usuário e/ou senha inválidos", 401)
      }
    
      const token = jwt.sign(
        {
            id: user.id,
        },
        String(process.env.SECRET_KEY),
        {
            subject: String(user.id),
            expiresIn: "30m"
        }
    )

    return {
        id: user.id,
        data_criacao: user.created_at, 
        data_atualizacao: user.updated_at, 
        ultimo_login: user.last_login,
        token,
    }
  }
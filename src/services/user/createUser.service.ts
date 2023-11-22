import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/user.interface";

export const createUserService = async (userData: IUserRequest): Promise<object> => {
    const userRepository = AppDataSource.getRepository(User)

    const newUser = userRepository.create({
        ...userData,
    })
    newUser.last_login = new Date()
    await userRepository.save(newUser)

    return {
        id: newUser.id,
        data_criacao: newUser.created_at, 
        data_atualizacao: newUser.updated_at, 
        ultimo_login: newUser.last_login,
      }
}



import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/user.interface";


export const createUserService = async (userData: IUserRequest): Promise<object> => {
    const userRepository = AppDataSource.getRepository(User)

    const newUser = userRepository.create({
        ...userData,
    })

    await userRepository.save(newUser)

    // const token = generateToken(newUser.id)

    return {
        id: newUser.id,
        data_criacao: newUser.created_at, 
        data_atualizacao: newUser.updated_at, 
        ultimo_login: newUser.last_login,
        // token,
      }
}



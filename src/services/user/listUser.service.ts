import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"


export const listUsersServices = async (): Promise<User[]> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.find({
        relations: {
            phones: true
        }
    })

    return user
}
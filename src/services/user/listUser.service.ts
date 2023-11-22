import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"


export const listUsersServices = async (): Promise<User[]> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.find({
        select: ["id", "name", "email", "created_at", "updated_at", "last_login", "phones"],
        relations: {
            phones: true
        }
    })

    return user
}
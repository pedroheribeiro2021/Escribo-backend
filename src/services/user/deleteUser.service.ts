import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { PhoneNumber } from "../../entities/phones.entity"


export const deleteUserService = async (id: string) => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: any = await userRepository.findOne({
        where: 
        {
            id: id
        },
        relations: {
            phones: true
        }
    })

    const phonesRepositry = AppDataSource.getRepository(PhoneNumber)

    const phone: any = await phonesRepositry.findOneBy({
        id: user.phones.id
    })

    await phonesRepositry.remove(phone)

    await userRepository.remove(user)
}
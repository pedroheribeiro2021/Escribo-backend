import { Exclude } from "class-transformer";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from "bcrypt";
import { PhoneNumber } from "./phones.entity";


@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 100 })
    name: string

    @Column({ length: 100, unique: true })
    email: string

    @Column({ length: 100 })
    @Exclude()
    password: string

    @OneToMany(() => PhoneNumber, (phone) => phone.user, { cascade: true })
    phones: PhoneNumber[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }
}

import { Exclude } from "class-transformer";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column({ type: 'timestamp', nullable: true })
    last_login: Date

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }
}

// PhoneNumber.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';


@Entity()
export class PhoneNumber {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 12 })
  phone: string

  @Column({ length: 2 })
  ddd: string

  @ManyToOne(() => User, (user) => user.phones)
  user: User
}

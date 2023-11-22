// PhoneNumber.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';


@Entity()
export class PhoneNumber {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  phone: string

  @Column()
  ddd: string

  @ManyToOne(() => User, (user) => user.phones)
  user: User
}

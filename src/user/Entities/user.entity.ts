/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    address: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column({ nullable: false })
    password: string;
}
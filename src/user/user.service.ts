/* eslint-disable prettier/prettier */
import { CreateUserDto } from './dtos/createUser.dtos';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './Entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dtos/updateUser.dtos';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
    async createUser(userObj: CreateUserDto) {
        const EUser = new User;
        const user = await this.usersRepository.findOneBy({ email: userObj.email });
        if (user) {
            throw new HttpException(`user already exist`, HttpStatus.CONFLICT);
        } else {
            const hashPass = await bcrypt.hash(userObj.password, 6)
            const readyUser = this.usersRepository.merge(EUser, userObj, { password: hashPass });
            console.log(readyUser);
            return await this.usersRepository.save(readyUser);

        }
    }

    async getAllUsers() {
        const allUsers = await this.usersRepository.find();
        return allUsers;
    }

    async getUserById(userId: string) {
        const user = await this.usersRepository.findOneBy({ id: +userId });
        return user;
    }

    async removeUser(userId: string) {
        const user = await this.usersRepository.findOneBy({ id: +userId })
        if (!user) {
            throw new HttpException("user not found or deleted", HttpStatus.NOT_FOUND)
        }
        const deleteUser = await this.usersRepository.delete({ id: +userId });
        return { msg: "Item has been deleted", data: deleteUser };
    }

    async updateUser(updateUserObj: any | UpdateUserDto) {
        const { id } = updateUserObj;
        const user = await this.usersRepository.findOneBy({ id: +id })
        if (!user) {
            throw new HttpException("user not found to update", HttpStatus.NOT_FOUND)
        }
        const updatedUser = await this.usersRepository.update({ id }, updateUserObj)
        return { msg: "Item has been updated", data: updatedUser };
    }

}
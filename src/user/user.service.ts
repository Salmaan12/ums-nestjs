import { CreateUserDto } from './dtos/createUser.dtos';
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './Entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
    async createUser(userObj: CreateUserDto) {
        const EUser = new User;
        const user = await this.usersRepository.findOneBy({ email: userObj.email });
        if (user) {
            throw new HttpException(`user already exist with this email "${userObj.email}"`, HttpStatus.CONFLICT);
        } else {
            const hashPass = await bcrypt.hash(userObj.password, 6)
            const readyUser = this.usersRepository.merge(EUser, userObj, { password: hashPass })
            return await this.usersRepository.save(readyUser);

        }
    }

}
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private _userService: UserService) { }

    @Post('createUser')
    async createUser(@Body() userObj: CreateUserDto) {
        try {
            return this._userService.createUser(userObj);
        } catch (error) {

        }
    }
}

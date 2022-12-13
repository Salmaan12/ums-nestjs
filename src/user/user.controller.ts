/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators';
import { CreateUserDto } from './dtos/createUser.dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private _userService: UserService) { }

    @Post('createUser')
    createUser(@Body() userObj: CreateUserDto) {
        return this._userService.createUser(userObj);
    }

    @Get('getAllUsers')
    findAllUser() {
        return this._userService.getAllUsers();
    }

    @Get('getUserById/:id')
    findUserById(@Param('id') id: string) {
        return this._userService.getUserById(id);
    }

    @Delete('deleteUser/:id')
    removeUser(@Param('id') id: string) {
        return this._userService.removeUser(id);
    }

    @Put('updateUser')
    updateUser(@Body() userObj: CreateUserDto) {
        return this._userService.updateUser(userObj);
    }

}

/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { Exclude } from 'class-transformer';
import { CreateUserDto } from "./createUser.dtos";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @Exclude()
    password?: string;
}
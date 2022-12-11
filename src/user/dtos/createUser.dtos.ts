/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'
export class CreateUserDto {
    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    readonly address: string;

    readonly phone: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
}
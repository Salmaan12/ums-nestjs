/* eslint-disable prettier/prettier */
import { User } from "src/user/Entities/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
export const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Paz*321*#',
    database: 'ums',
    entities: [User],
    synchronize: true,
}
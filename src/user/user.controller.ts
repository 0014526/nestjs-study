import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){};
    @Get("getUserById")
    async getUser(@Query("id") id:number){
        // await this.userService.getUserList();
    }
}

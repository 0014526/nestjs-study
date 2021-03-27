import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async getUserList(){
        return "this is user List"
    }
}

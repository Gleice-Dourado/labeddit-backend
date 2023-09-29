import { UserDB } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    TABLE_USERS = 'users'

    public async findUsers(q:string|undefined):Promise<UserDB[]>{
        let usersDB;

        if(q){
            const result: UserDB[] = await BaseDatabase.connection(this.TABLE_USERS)
                .where('name', 'LIKE', `%${q}%`);
            
            usersDB = result
        }else{
            const result: UserDB[] = await super.findAll();

            usersDB = result
        };

        return usersDB
    };

    public async findEmail(email:string):Promise<UserDB>{
        const [result]:UserDB[] = await BaseDatabase.connection(this.TABLE_USERS)
            .where({email});
        
        return result
    };

    public async createUser(newUser:UserDB):Promise<void>{
        await BaseDatabase.connection(this.TABLE_USERS)
            .insert(newUser)
    };
}
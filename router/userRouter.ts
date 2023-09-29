import express from "express";
import { UserBusiness } from "../src/business/UserBusiness";
import { UserController } from "../src/controller/UserController";
import { UserDatabase } from "../src/database/UserDatabase";
import { IdGenerator } from "../src/services/IdGenerator";
import { HashManager } from "../src/services/hashManager";
import { TokenManager } from "../src/services/tokenManager";

export const userRouter = express.Router();

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new TokenManager(),
        new IdGenerator(),
        new HashManager()
    )
);

userRouter.get('/', userController.getUsers);
userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login)
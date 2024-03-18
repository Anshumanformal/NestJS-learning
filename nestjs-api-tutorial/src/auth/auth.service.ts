import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Injectable({})
export class AuthService{
    login(){
        return {msg: 'I have logged in'}
    }
    signup(){
        return {msg: 'I have signed up'}
    }
}
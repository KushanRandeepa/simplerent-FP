import { Injectable } from "@angular/core";

Injectable({
  providedIn: 'root'
})
export interface SignupRequest {
  email: string;
  password: string;
  role: string;
}
export interface LoginRequest{
    username:string;
    password:string;
}

export interface LoginResponce{
    token:string;
    refreshToken:string;
    isLogin:Boolean;
}
export interface DecodeToken{
    sub: string;
    Role: string;
    iat: number;
    exp: number;
    userId: string;
}
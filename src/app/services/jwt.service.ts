import { Injectable } from '@angular/core';
// import {verify,decode} from 'jsonwebtoken'
// import * as jwt from 'jsonwebtoken';
import jwt_decode from "jwt-decode";
// import * as jose from 'jose'
import { JwtToken } from '../modal/jwt-token.modal';
// import {readFileSync} from 'fs';
import { Role } from '../modal/enum/role';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getTokenData(): JwtToken {
    try {
      var token = localStorage.getItem("JWT_TOKEN");
      var jwtPayload: JwtToken = {
        role: Role.GUEST,
        iss: "",
        refId: "",
        username: ""
      }
      if (token != null && token.length > 0) {
        var dPayload: JwtToken = jwt_decode(token);
        var { role, username, iss } = dPayload;
        console.log(dPayload);
        console.log(username);
        console.log(role);
        console.log(iss);
        return dPayload;
      } else
        return jwtPayload;

    } catch (error) {
      console.error(error)
      var jwtPayload: JwtToken = {
        role: Role.GUEST,
        iss: "",
        refId: "",
        username: ""
      }
      return jwtPayload;
    }
  }

  saveToken(jwtToken: string) {
    localStorage.setItem("JWT_TOKEN", jwtToken);
  }

  removeToken(){
    localStorage.removeItem("JWT_TOKEN");
  }
}

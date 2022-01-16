import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from './modal/enum/role';
import { JwtToken } from './modal/jwt-token.modal';
import { JwtService } from './services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtService:JwtService,
    private _router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    // var {role} = this.jwtService.getTokenData();
    // var rootPath=route.url[0].path;

    // if(rootPath.startsWith("admin")){
    //   if(role===Role.ADMIN){
    //     return true;
    //   }else if(role===Role.USER){
    //     this._router.navigate(['/user/profile']);
    //     return false;
    //   }else{
    //     this._router.navigate(['/login']);
    //     return false;
    //   }
    // }else if(rootPath.startsWith("user")){
    //   if(role===Role.USER || role===Role.ADMIN){
    //     return true;
    //   }else{
    //     this._router.navigate(['/login']);
    //     return false;
    //   }
    // }else{
    //   return true;
    // }  
    return true;
  }
  
}

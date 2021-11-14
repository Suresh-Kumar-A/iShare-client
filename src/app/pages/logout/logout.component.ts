import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private jwtService: JwtService, private _router: Router) { }

  ngOnInit(): void {
    this.jwtService.removeToken();
    this._router.navigate(["/login"]);
  }

}

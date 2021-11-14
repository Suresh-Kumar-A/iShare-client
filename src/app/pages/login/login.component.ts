import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/modal/login.modal';
import { FormValidationService } from 'src/app/services/form.validation.service';
import { JwtService } from 'src/app/services/jwt.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // styles: [`::ng-deep body{background-color: #30263d !important;}`]
})
export class LoginComponent implements OnInit {
  disableSubmitBtn = false;
  showErrorAlert = false;
  showErrorAlertMsg = "";
  passwordType = "password";
  usernameClassList: String[] = ["form-control"];
  passwordClassList: String[] = ["form-control"];

  loginFormGroup: FormGroup;

  constructor(private formValidationService: FormValidationService, private formGroup: FormBuilder,
    private userService: UserService, private router: Router,private jwtService:JwtService) {
    // If you don't include it in constructor you will get an error
    this.loginFormGroup = this.formGroup.group({
      username: 'ishare',
      password: 'Rvts123!',
      emailAddress: ''
    });
  }

  ngOnInit(): void {
    // logging out the user if already logged in
    this.jwtService.removeToken();
  }

  tooglePassword() {
    if (this.passwordType === "password")
      this.passwordType = "text";
    else
      this.passwordType = "password";
  }

  // this.route.navigate(['/profile']);
  login() {
    this.disableSubmitBtn = true;
    this.setDefaultFormClassList();
    const { username, password } = this.loginFormGroup.value
    if (this.validateFormValues(username, password)) {
      this.userService.login(username, password).subscribe((response) => {
        if (response.status == 200) {
          const data = response.body;
          if (data!=null && data.token) {
            console.log("Success")
            this.jwtService.saveToken(data.token);
            // if loggedIn user is not admin he will be auto redirect to user profile
            
            this.router.navigate(['/admin/profile']);
          } else {
            this.showErrorAlert = true;
            this.showErrorAlertMsg = data?.errorMessae == undefined ? "" : data?.errorMessae;
          }
        } else {
          console.info(response)
          this.showErrorAlert = true;
          this.showErrorAlertMsg = "Unsuccessful Response code from server"
        }
        this.disableSubmitBtn = false;
      });
    } else {
      console.info("Form Validation failed");
      this.disableSubmitBtn = false;
    }
  }

  validateFormValues(username: string, password: string): boolean {

    if (this.formValidationService.validateUsername(username)) {
      this.usernameClassList.push("is-valid");
    } else {
      this.usernameClassList.push("is-invalid");
      return false;
    }

    if (this.formValidationService.validatePassword(password)) {
      this.passwordClassList.push("is-valid");
    } else {
      this.passwordClassList.push("is-invalid");
      return false;
    }

    return true;
  }

  setDefaultFormClassList() {
    this.showErrorAlert = false;
    this.usernameClassList = ["form-control"];
    this.passwordClassList = ["form-control"];
  }
}

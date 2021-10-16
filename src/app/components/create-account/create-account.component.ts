import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormValidationService } from '../../services/form.validation.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  styles: [`::ng-deep body{background-color: #30263d !important;}`]
})
export class CreateAccountComponent implements OnInit {

  disableSubmitBtn = false;
  showErrorAlert = false;
  showSuccessAlert = false;
  showErrorAlertMsg = "";
  passwordType = "password";
  usernameClassList: String[] = ["form-control"];
  passwordClassList: String[] = ["form-control"];
  emailAddressClassList: String[] = ["form-control"];
  displayNameClassList: String[] = ["form-control"];

  createAccountFormGroup: FormGroup;

  constructor(private formValidationService: FormValidationService, private formGroup: FormBuilder,
    private userService: UserService, private route: Router) {
    // If you don't include it in constructor you will get an error
    this.createAccountFormGroup = this.formGroup.group({
      username: '',
      password: '',
      emailAddress: '',
      displayName: ''
    });
  }

  ngOnInit(): void {
    // this.createAccountFormGroup.valueChanges.subscribe(console.log);
  }

  tooglePassword() {
    if (this.passwordType === "password")
      this.passwordType = "text";
    else
      this.passwordType = "password";
  }

  createAccount() {
    this.disableSubmitBtn = true;
    this.setDefaultFormClassList();
    const { username, password, emailAddress, displayName } = this.createAccountFormGroup.value;
    if (this.validateFormValues(username, password, emailAddress, displayName)) {
      console.info("User Created Succeesfully");
      this.userService.createAccount(username, password, emailAddress, displayName).subscribe((response) => {
        if (response.status == 200) {
          const data = response.body;
          if (data != null) {
            this.showSuccessAlert = true;
            console.log("User created successfully");
            console.info(data);
            setTimeout(() => {
              // Redirect to login page after user created
              this.route.navigate(['/login']);
            }, 1900);
          } else {
            this.showErrorAlert = true;
            this.showErrorAlertMsg = "User Creation failed"
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

  validateFormValues(username: string, password: string, emailAddress: string, displayName: string): boolean {

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

    if (this.formValidationService.validateEmail(emailAddress)) {
      this.emailAddressClassList.push("is-valid");
    } else {
      this.emailAddressClassList.push("is-invalid");
      return false;
    }

    if (this.formValidationService.validateName(displayName)) {
      this.displayNameClassList.push("is-valid");
    } else {
      this.displayNameClassList.push("is-invalid");
      return false;
    }

    return true;
  }

  setDefaultFormClassList() {
    this.showErrorAlert = false;
    this.showSuccessAlert = false;
    this.usernameClassList = ["form-control"];
    this.passwordClassList = ["form-control"];
    this.emailAddressClassList = ["form-control"];
    this.displayNameClassList = ["form-control"];
  }

}

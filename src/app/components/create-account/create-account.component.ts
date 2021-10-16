import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  createAccountFormGroup: FormGroup;

  constructor(private formValidationService: FormValidationService, private formGroup: FormBuilder,
    private userService: UserService, private route: Router) {
    // If you don't include it in constructor you will get an error
    this.createAccountFormGroup = this.formGroup.group({
      username: '',
      password: '',
      emailAddress: ''
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
    // if (this.validateFormValues()) {
    //   console.info("User Created Succeesfully");
    //   this.userService.createAccount(this.createAccountFormGroup.value.emailAddress,
    //     this.createAccountFormGroup.value.password)
    //     .then(response => {
    //       this.showSuccessAlert = true;
    //       console.log("User created successfully");
    //       console.info(response.user);
    //       // Wait for 2 second and redirect to login
    //       setTimeout(() => {
    //         // Redirect to login page after user created
    //         this.route.navigate(['/login']);
    //       }, 1900);

    //     }).catch(err => {
    //       console.error(err)
    //       this.showErrorAlert = true;
    //       this.showErrorAlertMsg = err;
    //     }).finally(() => {
    //       this.disableSubmitBtn = false;
    //     });
    // } else {
    //   console.info("Form Validation failed");
    //   this.disableSubmitBtn = false;
    // }

  }

  validateFormValues(): Boolean {

    if (this.formValidationService.validateEmail(this.createAccountFormGroup.value.emailAddress)) {
      this.emailAddressClassList.push("is-valid");
    } else {
      this.emailAddressClassList.push("is-invalid");
      return false;
    }

    if (this.formValidationService.validatePassword(this.createAccountFormGroup.value.password)) {
      this.passwordClassList.push("is-valid");
    } else {
      this.passwordClassList.push("is-invalid");
      return false;
    }

    // if (this.formValidationService.validateUsername(this.createAccountFormGroup.value.username)) {
    //   this.usernameClassList.push("is-valid");
    // } else {
    //   this.usernameClassList.push("is-invalid");
    //   return false;
    // }

    return true;
  }

  setDefaultFormClassList() {
    this.showErrorAlert = false;
    this.showSuccessAlert = false;
    this.usernameClassList = ["form-control"];
    this.passwordClassList = ["form-control"];
    this.emailAddressClassList = ["form-control"];
  }

}

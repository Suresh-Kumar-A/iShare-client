import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(username: string) {
    const postRequestOptions = {
        method: 'POST'
    };
    const apiServerUrl = '';
    fetch(apiServerUrl + "/admin/delete-user?username=" + username, postRequestOptions)
        .then(response => response.json())
        .then((data) => {
            // console.log(data);
            // showTopSuccessNotificationWithMessageAndAutoReload("User Account Deleted successfully")
        })
        .catch(() => {
            console.error("unable to Delete User");
            // showTopErrorNotificationWithMessage("Unable to delete user account. Try again")
        })
}

}

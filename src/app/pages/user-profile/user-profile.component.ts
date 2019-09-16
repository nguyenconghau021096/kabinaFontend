import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/services/userprofile';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  UserObject = null;
 
  currentUser: User;

  constructor(
    private _userProfile: UserProfile,
    private authenticationService: AuthenticationService
  ){ 
  
    this.currentUser = this.authenticationService.currentUserValue;
    
  }

  ngOnInit() {

    this.UserObject = this._userProfile.getUserInfo(this.currentUser.id).subscribe(
      data => {
       
        this.UserObject = data;
        console.log(this.UserObject)
      },
      err => {
        alert(err);
      }
    )
  }

}
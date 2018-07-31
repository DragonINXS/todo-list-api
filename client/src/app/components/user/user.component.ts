import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // for ngModel stuff
import { subscribeOn } from '../../../../node_modules/rxjs-compat/operator/subscribeOn';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
  

export class UserComponent implements OnInit {

  signUpUser: any = {};
  
  theActualUser: any = {};

  loginUser: any = {};

  theError: any = {};

  constructor(private authService: AuthService) { } //<----- camelCasing the service is the naming convention

  tryToSignUp() {
    this.authService.signup(this.signUpUser)
      .subscribe(
        userObjFromApi => {this.successCallback(userObjFromApi)},
            err => { this.errorCallback(err) }
        );
  }

  tryToLogIn() {
    console.log(this.loginUser);
    this.authService.login(this.loginUser)
      .subscribe(
        res => { this.theActualUser = res },
        err => { this.theActualUser.theError = err }
      );
  }

  logMeOut() {
    this.authService.logout()
      .subscribe(res => this.theActualUser = {});
  }

  successCallback(userObject) {
    this.theActualUser = userObject;
    this.theError = null;
  }

  errorCallback(errorObject) {
    this.theError = errorObject;
    this.theActualUser = {};
  }

  checkIfLoggedIn() {
    this.authService.isLoggedIn()
      .subscribe(
        res => { this.successCallback(res) },
        err => { this.errorCallback(null) }
      );
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

}

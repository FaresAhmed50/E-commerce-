import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent {

  passwordeye: boolean = false;
  rePassword: boolean = false;



  seePasword(){
    this.passwordeye = !this.passwordeye;
    console.log(this.passwordeye);
  }

  seeRePasword(){
    this.rePassword = !this.rePassword;
    console.log(this.passwordeye);
  }

}

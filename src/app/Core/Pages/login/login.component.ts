import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent {

  passwordEye: boolean = false;
  rePasswordEye: boolean = false;
  @ViewChild("password") password!: ElementRef;
  @ViewChild('RePassword') RePassword!: ElementRef;


  LoginFrom : FormGroup = new FormGroup({
    name : new FormControl(),
    email : new FormControl(),
    password: new FormControl(),
    rePassword: new FormControl(),
    phone : new FormControl(),
  })



  //Used to togel the type property between passwword and text
  seePasword(){
    this.passwordEye = !this.passwordEye;
    this.passwordEye ? this.password.nativeElement.type = 'text' :  this.password.nativeElement.type = 'password';
  }

  //Used to togel the type property between passwword and text
  seeRePasword(){
    this.rePasswordEye = !this.rePasswordEye;
    this.rePasswordEye ? this.RePassword.nativeElement.type = 'text' : this.RePassword.nativeElement.type = 'password';
  }

}

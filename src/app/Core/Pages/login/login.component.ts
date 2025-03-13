import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthServiceService} from '../../Services/auth/auth-service.service';
import {Modal} from 'flowbite';


@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent implements AfterViewInit {

  _authService = inject(AuthServiceService)
  passwordEye: boolean = false;
  rePasswordEye: boolean = false;
  @ViewChild("password") password!: ElementRef;
  @ViewChild('RePassword') RePassword!: ElementRef;
  @ViewChild('modal') modalElement!: ElementRef;
  modal!: Modal;

  ngAfterViewInit() {
    this.modal  = new Modal(this.modalElement.nativeElement);
  }

  LoginFrom : FormGroup = new FormGroup({
    name : new FormControl( null , [Validators.required, Validators.minLength(6) , Validators.maxLength(30) ] ),
    email : new FormControl(null , [Validators.required, Validators.email]),
    password: new FormControl(null , [Validators.required, Validators.pattern(/^[A-Z]\w{4,}$/) ]),
    rePassword: new FormControl(null , [Validators.required, Validators.pattern(/^[A-Z]\w{4,}$/) ]),
    phone : new FormControl(null , [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  } , this.rePasswordValidation );


  rePasswordValidation(form:AbstractControl){

    const password = form.get('password')?.value;
    const rePassword = form.get('rePassword')?.value;

    return password == rePassword ? null : {misMatch: true};
  }



  loginForm(){

    if(this.LoginFrom.invalid){
      this.LoginFrom.markAsTouched();
    }else{
      this._authService.Signup(this.LoginFrom.value).subscribe({
        next: result => {
          console.log(result);
        },
        error: error => {
          console.log(error);
          this.modal.show();
        },
        complete: () => {}
      })
    }
    console.log(this.LoginFrom);

  }



  //Used to togel the type property between password and text
  seePasword(){
    this.passwordEye = !this.passwordEye;
    this.passwordEye ? this.password.nativeElement.type = 'text' :  this.password.nativeElement.type = 'password';
  }

  //Used to togel the type property between password and text
  seeRePasword(){
    this.rePasswordEye = !this.rePasswordEye;
    this.rePasswordEye ? this.RePassword.nativeElement.type = 'text' : this.RePassword.nativeElement.type = 'password';
  }

  protected readonly FormGroup = FormGroup;
}

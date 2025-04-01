import {AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthServiceService} from '../../Services/auth/auth-service.service';
import {Subscription} from 'rxjs';
import {URLService} from '../../Services/NavServices/urlservice.service';
import {Modal} from 'flowbite';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit ,  AfterViewInit , OnDestroy {


  _AuthService : AuthServiceService = inject(AuthServiceService);
  _uRLService : URLService = inject(URLService)
  subscription : Subscription = new Subscription();
  passwordeye : boolean = false;
  apiCalling : boolean = false;
  errorMassage !: string;
  SignupForm !: FormGroup;
  @ViewChild('password') PasswordInput !: ElementRef;
  @ViewChild('modal') modalElement!: ElementRef;
  modal!: Modal;


  ngOnInit() {
    this.loginFormInint();
  }


  ngAfterViewInit() {
    this.modal  = new Modal(this.modalElement.nativeElement);
  }



  loginFormInint(){
    this.SignupForm  = new FormGroup({
      email : new FormControl(null , [Validators.required, Validators.email]),
      password : new FormControl(null , [Validators.required, Validators.pattern(/^[A-Z]\w{6,}$/) ]),
    })
  }

  signupForm(){
    console.log(this.SignupForm);
    if(this.SignupForm.invalid){
      this.SignupForm.markAllAsTouched();
    }else{
      this.apiCalling = true;
      this.subscription = this._AuthService.signin(this.SignupForm.value).subscribe({
        next: (result) => {
          this.apiCalling = false;
          localStorage.setItem("userToken" , result.token);
          this._uRLService.registerNavigation('/home')
        },
        error: (error) => {
          this.apiCalling = false;
          this.errorMassage = error.error.message;
          this.modal.show();
          // console.log(error.error.message);
        },
        complete: () => {}
      })
    }
  }

  seePassword(){
    this.passwordeye = !this.passwordeye;
    this.passwordeye ? this.PasswordInput.nativeElement.type = 'text' : this.PasswordInput.nativeElement.type = 'password';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

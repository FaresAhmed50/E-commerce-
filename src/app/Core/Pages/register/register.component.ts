import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
    imports: [
        RouterLink
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  passwordeye : boolean = false;


  seePasword(){
    this.passwordeye = !this.passwordeye;
    console.log(this.passwordeye);
  }

}

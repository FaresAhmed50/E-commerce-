import {afterNextRender, inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignInDate, Userdata, userToken} from '../../Interfaces/User Date/userdata';
import {Environments} from '../../../Environments/environments';
import {BehaviorSubject, Observable} from 'rxjs';
import {jwtDecode} from "jwt-decode"

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private userToken !: string | null ;
  userTokenDecoded : BehaviorSubject<userToken> = new BehaviorSubject({
    "id": "",
    "name": "",
    "role": "",
    "iat": 0,
    "exp": 0
  });


  _httpClient = inject(HttpClient);
  env = Environments;


  Signup(userDate: Userdata) : Observable<any> {
    return this._httpClient.post(this.env.BaseURL + `auth/signup` , userDate);
  }

  signin(loginUser : SignInDate) : Observable<any> {
    return this._httpClient.post(this.env.BaseURL + `auth/signin` , loginUser);
  }

  logout() {
    localStorage.removeItem('userToken');
    this.userTokenDecoded.next({
      "id": "",
      "name": "",
      "role": "",
      "iat": 0,
      "exp": 0
    });
    this._uRLService.loginNavigation('/auth/register');
  }

  UserToken(){
    if(localStorage.getItem('userToken')){
      this.userToken = localStorage.getItem('userToken');
      this.userTokenDecoded.next(jwtDecode(this.userToken!))
    }
  }


  longedINChecker(){
    if(localStorage.getItem('userToken')){
      this.userToken = localStorage.getItem('userToken');
      this.userTokenDecoded.next(jwtDecode(this.userToken!))
    }
  }

}

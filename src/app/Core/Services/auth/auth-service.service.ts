import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignInDate, Userdata} from '../../Interfaces/User Date/userdata';
import {Environments} from '../../../Environments/environments';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  _httpClient = inject(HttpClient);
  env = Environments


  Signup(userDate: Userdata) : Observable<any> {
    return this._httpClient.post(this.env.BaseURL + `auth/signup` , userDate);
  }

  signin(loginUser : SignInDate) : Observable<any> {
    return this._httpClient.post(this.env.BaseURL + `auth/signin` , loginUser);
  }

}

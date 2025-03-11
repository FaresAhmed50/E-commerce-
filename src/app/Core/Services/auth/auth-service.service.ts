import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Userdata} from '../../Interfaces/User Date/userdata';
import {Environments} from '../../../Environments/environments';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  _httpClient = inject(HttpClient);
  env = Environments

  constructor() { }



  Signup(userDate: Userdata) : Observable<any> {
    return this._httpClient.post(this.env.BaseURL + `auth/signup` , userDate);
  }




}

import {inject, Injectable} from '@angular/core';
import {NavigationEnd ,  Router} from '@angular/router';
import {filter} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class URLService  {

  _router = inject(Router);
  private currentURL = ``;
  y !: any;

  constructor() {
    this.CurrentURL();

  }

  CurrentURL()  {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {this.currentURL = event.url})
  }

  isAuthRoute() : boolean{
    // console.log(this.x())
    return !(this.currentURL.includes('auth') || this.currentURL == '/');
  }


  x(){
    // this.y = this._router.events.subscribe(event => { this .y = event instanceof NavigationEnd ; });
    // console.log("yyyyyyyyy   ",this.y)
  }


}

import {inject, Injectable} from '@angular/core';
import {GuardsCheckStart, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class URLService  {

  _router = inject(Router);
  private currentURL = ``;


  constructor() {
    this.CurrentURL();
  }

  CurrentURL()  {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {this.currentURL = event.url})
  }

  isAuthRoute() : boolean{
    return !(this.currentURL.includes('auth') || this.currentURL == '/');
  }
}

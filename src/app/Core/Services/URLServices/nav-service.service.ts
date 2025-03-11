import {inject, Injectable, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService implements OnInit {

  private currentURL = ``;
  _router = inject(Router);

  constructor() {}

  ngOnInit() {
    this.CurrentURL();
  }

  CurrentURL()  {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {this.currentURL = event.url})
  }

  isAuthRoute() : boolean{
    return  this.currentURL.includes('/auth');
  }
}

import {Component, ElementRef, inject, OnChanges, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {FlowbiteService} from '../../Services/Flowbit/flowbite.service';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {ButtonComponent} from '../../UI/buttom/button.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {URLService} from '../../../Core/Services/NavServices/urlservice.service';
import {isPlatformBrowser} from '@angular/common';
import {AuthServiceService} from '../../../Core/Services/auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit , OnChanges {


  _flowbiteService : FlowbiteService = inject(FlowbiteService);
  _breakpointObserver :BreakpointObserver = inject(BreakpointObserver);
  _uRLService:URLService = inject(URLService)
  _authService : AuthServiceService = inject(AuthServiceService);
  screenSize!: boolean;
  cart_count : number = 0;
  wishlist_count : number = 0;
  IsLoggedIn: boolean = false;



  ngOnInit() {
    this._flowbiteService.loadFlowbite( flowbite => {});
    this.screenTraking();
    this._uRLService.isAuthRoute();
    console.log( "servicesss" , this._uRLService.isAuthRoute());
    this.isLoggedIn();
  }

  ngOnChanges() {
    this.screenTraking();
  }

  screenTraking(){
    this._breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        console.log(result.matches);
        this.screenSize = result.matches;
      } else {
        console.log(false)
        this.screenSize = result.matches;
      }
    });
  }

  isLoggedIn(){
    this._authService.userTokenDecoded.subscribe({
      next: (result) => {
        console.log(result.id , "IDDD")
        console.log(this.IsLoggedIn , "is logged in");
        if (result.id != "") {
          this.IsLoggedIn = true;
          console.log(this.IsLoggedIn , "is logged in");
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {}
      }
    )
  }


  logOut(){
    this._authService.logout();
  }

}
